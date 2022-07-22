<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            params: {
                type: Array|Object
            }
        },
        data() {
            return {
                configChanged: false,
                paramChanged: false,
                mainTemplatePath: {},
                templates: {},
                compiledTemplate: {}
            }
        },
        mounted() {
            let templateToCompile = {
                template_path: this.mainTemplatePath,
                params: this.params
            }
            this.compiledTemplate = this.replaceConfigTemplates(templateToCompile)
        },
        methods: {
            replaceConfigTemplates(config) {
                do {
                    this.configChanged = false
                    config = this.replaceUpperConfigTemplates(config)
                }
                while (this.configChanged)
                return config
            },
            replaceUpperConfigTemplates(config) {
                if (Array.isArray(config)) {
                    let self = this
                    return config.map(function(configValue) {
                        return self.replaceUpperConfigTemplates(configValue)
                    })
                }
                else if (typeof(config) == 'object') {
                    if ('template_path' in config) {
                        return this.replaceTemplate(config)
                    }
                    else {
                        return this.replaceObjectTemplateProperties(config)
                    }
                }
                else {
                    return config
                }
            },
            replaceObjectTemplateProperties(config) {
                for (const [key, value] of Object.entries(config)) {
                    if (value == null) {
                        config[key] = null
                    }
                    else if (Array.isArray(value)) {
                        let self = this
                        config[key] = value.map(function(configValue) {
                            return self.replaceUpperConfigTemplates(configValue)
                        })
                    }
                    else if (typeof(value) == 'object') {
                        if ('template_path' in value) {
                            config[key] = this.replaceTemplate(value)
                        }
                        else {
                            config[key] = this.replaceUpperConfigTemplates(value)
                        }
                    }
                }
                return config
            },
            replaceTemplate(config) {
                let templateConfig = getObjectSubProperty(this.subTemplates, config.template_path)
                if ('params' in config) {
                    do {
                        this.paramChanged = false
                        templateConfig = this.replaceTemplateParams(templateConfig, config.params)
                    } while (this.paramChanged)
                }
                this.configChanged = true
                return templateConfig
            },
            replaceTemplateParams(template, params) {
                if (template == null) {
                    return null
                }
                else if (Array.isArray(template)) {
                    let arrayTemplate = []
                    let self = this
                    template.forEach(function (templateValue) {
                        let replacedTemplateValue = self.replaceTemplateParams(templateValue, params)
                        if (typeof templateValue == 'object' && 'array_data' in templateValue && templateValue.merge_to_parent) {
                            arrayTemplate = arrayTemplate.concat(replacedTemplateValue)
                        }
                        else {
                            arrayTemplate.push(replacedTemplateValue)
                        }
                    })
                    return arrayTemplate
                }
                else if (typeof(template) == 'object') {
                    if ('array_data' in template) {
                        return this.createArrayTemplate(template, params[template.array_data], template.array_data)
                    }
                    else {
                        let replaceTemplate = JSON.parse(JSON.stringify(template))
                        for (const [key, value] of Object.entries(replaceTemplate)) {
                            replaceTemplate[key] = this.replaceTemplateParams(value, params)
                        }
                        return replaceTemplate
                    }
                }
                else {
                    return this.getTemplateValue(template, params)
                }
            },
            createArrayTemplate(template, arrayParam, arrayParamName) {
                let replaceTemplate = JSON.parse(JSON.stringify(template))
                delete replaceTemplate.array_data
                delete replaceTemplate.merge_to_parent
                let self = this
                return arrayParam.map(function(param) {
                    let configParam = {}
                    configParam[arrayParamName] = param
                    return self.replaceTemplateParams(replaceTemplate, configParam)
                })
            },
            getTemplateValue(value, params) {
                if (typeof value == 'string') {
                    if (value.indexOf('++') == 0) {
                        let valueToCheck = value.substring(2)
                        let replacedValue = getObjectSubProperty(params, valueToCheck, value)
                        if (replacedValue != value) {
                            this.paramChanged = true
                        }
                        return replacedValue
                    }
                    else {
                        return value
                    }
                }
                else {
                    return value
                }
            }
        }
    }
</script>
