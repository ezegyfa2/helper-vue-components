const lex = require('pug-lexer')
const purgePug = require('purgecss-from-pug')
const fs = require('fs')
const path = require('path')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const { connect } = require('http2')
require('js-helper-methods/objectMethods.js')
require('js-helper-methods/StringMethods.js')

global.whiteAttributes = []
global.extractedContents = []

global.compileAssets = (mix, packageName, templateNames) => {
    mix.webpackConfig(currentWebpackConfig)
    mix.js('resources/js/basicPackages.js', 'public/js').vue()
    templateNames.forEach(templateName => {
        compileTemplateAssets(mix, packageName, templateName)
    })
    mix.compress()
}

global.compileTemplateAssets = (mix, packageName, templateName) => {
    const templatePath = path.resolve('node_modules', packageName, 'src', templateName)
    changeMixConfig(mix, templatePath)
    const lowerCaseTemplateName = templateName[0].toLowerCase() + templateName.slice(1)
    mix.sass('resources/sass/' + lowerCaseTemplateName + '.scss', 'public/css/')
    mix.js('resources/js/' + lowerCaseTemplateName + '.js', 'public/js').vue().sourceMaps()
    mix.copy(path.join(templatePath, 'CompiledTemplate.json'), path.join('app/Templates', lowerCaseTemplateName + '.json'))
}

global.changeMixConfig = (mix, templatePath) => {
    const newPlugin = new PurgeCSSPlugin({
        paths: [ 'WhiteAttributes.html' ],
        safelist: {
            deep: getWhitelistItems(templatePath)
        }
    })
    const currentPurgeCSSPlugin = getCurrentWebpackConfigPurgeCSSPlugin()
    const currentPlugins = currentWebpackConfig.plugins
    if (currentPurgeCSSPlugin) {
        currentPlugins[currentPlugins.indexOf(currentPurgeCSSPlugin)] = newPlugin
    }
    else if (currentPlugins) {
        currentPlugins.push(newPlugin)
    }
    else {
        currentWebpackConfig.plugins = [ newPlugin ]
    }
    mix.webpackConfig(currentWebpackConfig)
}

global.getCurrentWebpackConfigPurgeCSSPlugin = () => {
    for (const plugin in currentWebpackConfig.plugins) {
        if (plugin instanceof PurgeCSSPlugin) {
            return plugin
        }
    }
    return null
}

global.getWhitelistItems = (rootPath) => {
    let collectedItems = collectWhitelistItems(rootPath)
    createWhitelistAttributesHtml(rootPath)
    collectedItems = splitCollectedItems(collectedItems)
    collectedItems = collectedItems.map(collectedItem => {
        return new RegExp('^' + collectedItem + '$')
    })
    collectedItems.push(new RegExp('^html$'))
    collectedItems.push(new RegExp('^body$'))
    return collectedItems
}

global.createWhitelistAttributesHtml = () => {
    let content = '<main class=\''
    whiteAttributes.forEach(whiteAttribute => {
        content += whiteAttribute + ' '
    })
    content += '\'></main>'
    fs.writeFileSync('WhiteAttributes.html', content)
}

global.splitCollectedItems = (collectedItems) => {
    let splittedItems = []
    collectedItems.forEach(collectedItem => {
        splittedItems.push(...collectedItem.split(' '))
    })
    return splittedItems
}

global.collectWhitelistItems = (rootPath) => {
    let collectedItems = []
    const indexPath = path.resolve(rootPath, 'index.js')
    if (fs.existsSync(indexPath)) {
        const requiredFolderPaths = collectIndexRequiredPaths(indexPath, rootPath)
        requiredFolderPaths.forEach(requiredFolderPath => {
            const folderPath = path.resolve('node_modules', requiredFolderPath)
            collectedItems.push(...collectWhitelistItems(folderPath))
        })
    }
    const templatePath = path.resolve(rootPath, 'Template.js')
    if (fs.existsSync(templatePath)) {
        collectedItems.push(...collectAddedClassesFromTemplate(templatePath))
    }
    /*const vuePath = path.resolve(rootPath, 'Component.vue')
    if (fs.existsSync(vuePath)) {
        collectedItems.push(...collectAddedClassesFromVue(vuePath))
    }*/
    const pugPath = path.resolve(rootPath, 'Template.pug')
    if (fs.existsSync(pugPath)) {
        collectedItems.push(...purgeCSSFromPug(fs.readFileSync(pugPath, 'utf8')))
    }
    const whiteClassesPath = path.resolve(rootPath, 'WhiteClasses.pug')
    if (fs.existsSync(whiteClassesPath)) {
        collectedItems.push(...purgeCSSFromPug(fs.readFileSync(whiteClassesPath, 'utf8')))
    }
    
    return collectedItems
}

global.collectIndexRequiredPaths = (indexPath, rootPath) => {
    const indexContent = fs.readFileSync(indexPath, 'utf8')
    return collectContentRequiredPaths(indexContent, rootPath)
}

global.collectContentRequiredPaths = (indexContent, rootPath) => {
    const indexContentParts = indexContent.split('require(\'')
    let requiredFolderPaths = []
    indexContentParts.forEach((indexContentPart) => {
        const subIndexContentParts = indexContentPart.split('\').default.install(Vue)')
        if (subIndexContentParts.length > 1) {
            requiredFolderPaths.push(subIndexContentParts[0])
        }
    })
    return requiredFolderPaths.map(requiredFolderPath => {
        if (requiredFolderPath.charAt(0) == '.') {
            return path.join(rootPath, requiredFolderPath)
        }
        else {
            const requiredFolderPathParts = requiredFolderPath.split('/', 1)
            requiredFolderPath = requiredFolderPath.replace(requiredFolderPathParts[0], path.join(requiredFolderPathParts[0], 'src'))
            return path.resolve('node_modules', requiredFolderPath)
        }
    })
}

global.collectAddedClassesFromTemplate = (templatePath) => {
    let templateContent = fs.readFileSync(templatePath, 'utf8')
    templateContent = templateContent.replace('export default ', '')
    console.log(templateContent)
    return collectAddedClasses(JSON.parse(templateContent))
}

/*global.collectAddedClassesFromVue = (vuePath) => {
    let vueContent = fs.readFileSync(vuePath, 'utf8')
    vueContent = vueContent.split('<script>')[1]
    vueContent = vueContent.split('</script>')[0]
    vueContent = vueContent.replace('export default ', '')
    return collectAddedClasses(JSON.parse(vueContent))
}*/

global.collectAddedClasses = (objectToCheck) => {
    if (Array.isArray(objectToCheck)) {
        let collectedClasses = []
        objectToCheck.forEach((objectValue) => {
            collectedClasses.push(...collectAddedClasses(objectValue))
        })
        return collectedClasses
    }
    else if (objectToCheck && typeof(objectToCheck) == 'object') {
        let collectedClasses = []
        for (const [key, value] of Object.entries(objectToCheck)) {
            const isTemplateParameterValue = typeof(value) == 'string' && (value.startsWith('-++') || value.startsWith('++') || value.startsWith('--'))
            if (!isTemplateParameterValue) {
                if (key == 'added_classes' || key == 'addedClasses' || key.endsWith('class') || key.endsWith('Class')) {
                    collectedClasses.push(...collectObjectValuesRecursively(value))
                }
                else if (key == 'data' && typeof(value) == 'function') {
                    collectedClasses.push(...collectAddedClasses(value()))
                }
                else {
                    collectedClasses.push(...collectAddedClasses(value))
                }
            }
        }
        return collectedClasses
    }
    else {
        return []
    }
}

global.purgeCSSFromPug = (content) => {
    const tokens = lex(content)
    const selectors = []
    for (const token of tokens) {
        switch (token.type) {
            case "tag":
            case "id":
            case "class":
                selectors.push(...token.val.split(" "));
                break;
            case "attribute":
                if (token.name === "class" || token.name === "id") {
                    if (typeof token.val !== "string") continue;
                    selectors.push(
                        ...(token.mustEscape
                        ? token.val.replace(/"/g, "")
                        : token.val
                        ).split(" ")
                    );
                }
                else {
                    const isVueAttribute = token.name.startsWith(':') 
                        || token.name.startsWith('v-if') 
                        || token.name.startsWith('v-bind:')
                        || token.name.startsWith('v-on:')
                        || token.name == 'v-for'
                        || token.name == 'v-model'
                        || token.name == 'ref'
                        || token.name == '@click'
                        || token.name == 'v-bind'
                    if (typeof token.val == "string" && !isVueAttribute) {
                        const newSelector = token.val.replace(/"/g, "").replace(/'/g, "")
                        whiteAttributes.push('[' + token.name + '="' + newSelector + '"]')
                        whiteAttributes.push('[' + token.name + '=' + newSelector + ']')
                    }
                }
                break;
            default:
                break;
        }
    }
    return selectors;
}

global.replaceComponentRegistrations = (folderPath) => {
    fs.readdirSync(folderPath).forEach(fileName => {
        const filePath = path.join(folderPath, fileName)
        if (fs.lstatSync(filePath).isDirectory()) {
            replaceComponentRegistrations(filePath)
        }
        else if (path.extname(filePath) == 'js' || path.extname(filePath) == 'vue') {
            const oldFileContent = fs.readFileSync(filePath, 'utf8')
            let fileContent = oldFileContent
            do {
                fileContent = replaceComponentRegistration(fileContent)
            }
            while (fileContent.includes('registerVueComponent('))
            if (fileContent != oldFileContent) {
                fs.writeFileSync(filePath, fileContent)
            }
        }
    })
}

global.replaceComponentRegistration = (fileContent) => {
    let newContent = ''
    let contentParts = fileContent.splitToFullParts('registerVueComponent(', 2)
    newContent += contentParts[0]
    if (contentParts.length > 1) {
        contentParts = contentParts[1].splitToFullParts(')', 3)
        //console.log(contentParts)
        const rightPart = contentParts[2]
        contentParts = contentParts[0].split(',')
        let componentPart = 'Vue.component(' + contentParts[0].trim() + ', () => import(' 
            + contentParts[1].replace('require(', '').trim() + '))'
        componentPart = componentPart.replace("\r\n", '')
        newContent += componentPart
        newContent += rightPart
    }
    return newContent
}

global.replaceImageCache = (cacheFilePath) => {
    let newContent = ''
    let cacheFileContent = fs.readFileSync(cacheFilePath, 'utf8')
    let cacheFileContentParts = cacheFileContent.splitToFullParts('return', 2)
    newContent += cacheFileContentParts[0] + 'return ' + getPHPFolderMap('public/images')
    let rightParts = cacheFileContentParts[1].splitToFullParts(';', 2)
    newContent += ';' + rightParts[1];
    fs.writeFileSync('app/Http/ImageCache.php', newContent)
}

global.getPHPFolderMap = (folderPath) => {
    let folderMap = getFolderMap(folderPath)
    folderMap = JSON.stringify(folderMap, null, 4)
    folderMap = folderMap.replaceAll('{', '[').replaceAll('}', ']').replaceAll(':', ' =>').replaceAll("\n", "\n        ")
    return folderMap
}

global.getFolderMap = (folderPath) => {
    let map = {}
    fs.readdirSync(folderPath).forEach(fileName => {
        const currentPath = path.join(folderPath, fileName)
        if (fs.lstatSync(currentPath).isDirectory()) {
            map[fileName] = getFolderMap(currentPath)
        }
        else {
            map[parseFloat(path.parse(currentPath).name)] = true
        }
    })
    return map
}
