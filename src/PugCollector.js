const purgePug = require('purgecss-from-pug')
const fs = require('fs')
const path = require('path')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob-all')

global.extractedContents = []

global.changeMixConfig = (mix, templatePath) => {
    currentWebpackConfig.plugins[0] = new PurgeCSSPlugin({
        paths: glob.sync(collectPugPaths(templatePath)),
        safelist: {
            deep: getPugItems(templatePath)
        }
    })
    mix.webpackConfig(currentWebpackConfig)
}

global.getPugItems = (rootPath) => {
    let collectedItems = []
    collectPugPaths(rootPath).map(pugPath => {
        collectedItems.push(...purgePug(fs.readFileSync(pugPath, 'utf8')))
    })
    collectedItems = collectedItems.map(collectedItem => {
        return new RegExp('^' + collectedItem + '$')
    })
    collectedItems.push(new RegExp('^html$'))
    collectedItems.push(new RegExp('^body$'))
    return collectedItems
}

global.collectPugPaths = (rootPath) => {
    let collectedPugPaths = []
    const indexPath = path.resolve(rootPath, 'index.js')
    if (fs.existsSync(indexPath)) {
        const requiredFolderPaths = collectIndexRequiredPaths(indexPath, rootPath)
        requiredFolderPaths.forEach(requiredFolderPath => {
            const folderPath = path.resolve('node_modules', requiredFolderPath)
            collectedPugPaths.push(...collectPugPaths(folderPath))
        })
    }
    const pugPath = path.resolve(rootPath, 'template.pug')
    if (fs.existsSync(pugPath)) {
        collectedPugPaths.push(pugPath)
    }
    return collectedPugPaths
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
            console.log('parts', requiredFolderPath)
            return path.resolve('node_modules', requiredFolderPath)
        }
    })
}
