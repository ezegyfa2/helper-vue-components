<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            params: {
                type: Array|Object,
                designIgnore: true
            },
            template_type_name: {
                type: String
            }
        },
        data() {
            return {
                configChanged: false,
                paramChanged: false,
                compiledTemplate: {}
            }
        },
        mounted() {
            let templateToCompile = {
                template_type_name: this.template_type_name,
                params: this.params
            }
            this.compiledTemplate = this.replaceConfigTemplates(templateToCompile)
        },
        computed: {
            compiledTemplateText() {
                return JSON.stringify(this.compiledTemplate)
            }
        },
        methods: {
            replaceConfigTemplates(config) {
                let globalParams = config.params
                do {
                    this.configChanged = false
                    config = this.replaceUpperConfigTemplates(config, globalParams)
                }
                while (this.configChanged)
                return config
            },
            replaceUpperConfigTemplates(config, globalParams) {
                if (Array.isArray(config)) {
                    let self = this
                    return config.map((configValue) => {
                        return self.replaceUpperConfigTemplates(configValue, globalParams)
                    })
                }
                else if (config && typeof(config) == 'object') {
                    if ('template_type_name' in config) {
                        return this.replaceTemplate(config, globalParams)
                    }
                    else {
                        return this.replaceObjectTemplateProperties(config, globalParams)
                    }
                }
                else {
                    return config
                }
            },
            replaceObjectTemplateProperties(config, globalParams) {
                for (const [key, value] of Object.entries(config)) {
                    if (value == null) {
                        config[key] = null
                    }
                    else if (Array.isArray(value)) {
                        let self = this
                        config[key] = value.map((configValue) => {
                            return self.replaceUpperConfigTemplates(configValue, globalParams)
                        })
                    }
                    else if (typeof(value) == 'object') {
                        if ('template_type_name' in value) {
                            config[key] = this.replaceTemplate(value, globalParams)
                        }
                        else {
                            config[key] = this.replaceUpperConfigTemplates(value, globalParams)
                        }
                    }
                }
                return config
            },
            replaceTemplate(config, globalParams) {
                let templateConfig = getObjectSubProperty(window.templates, config.template_type_name)
                if ('params' in config) {
                    templateConfig = this.replaceTemplateParams(templateConfig, config.params, '++')
                }
                if (globalParams) {
                    templateConfig = this.replaceTemplateParams(templateConfig, globalParams, '-++')
                    templateConfig = this.replaceTemplateParams(templateConfig, globalParams, '--')
                }
                this.configChanged = true
                return templateConfig
            },
            replaceTemplateParams(templateConfig, params, paramPrefix) {
                do {
                    this.paramChanged = false
                    templateConfig = this.replaceUpperTemplateParams(templateConfig, params, paramPrefix)
                } while (this.paramChanged)
                return templateConfig
            },
            replaceUpperTemplateParams(template, params, paramPrefix) {
                if (template == null) {
                    return null
                }
                else if (Array.isArray(template)) {
                    let arrayTemplate = []
                    let self = this
                    template.forEach((templateValue) => {
                        let replacedTemplateValue = self.getReplacedTemplateValue(templateValue, params, paramPrefix)
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
                            replaceTemplate[key] = this.replaceUpperTemplateParams(value, params, paramPrefix)
                        }
                        return replaceTemplate
                    }
                }
                else {
                    return this.getTemplateValue(template, params, paramPrefix)
                }
            },
            getReplacedTemplateValue(templateValue, params, paramPrefix) {
                if (typeof templateValue == 'object' && 'array_data' in templateValue && templateValue.direct_paste) {
                    return params[templateValue.array_data]
                }
                else {
                    return this.replaceUpperTemplateParams(templateValue, params, paramPrefix)
                }
            },
            createArrayTemplate(template, arrayParam, arrayParamName) {
                if (arrayParam && Array.isArray(arrayParam)) {
                    let replaceTemplate = JSON.parse(JSON.stringify(template))
                    delete replaceTemplate.array_data
                    delete replaceTemplate.merge_to_parent
                    return arrayParam.map((param) => {
                        let configParam = {}
                        configParam[arrayParamName] = param
                        return this.replaceUpperTemplateParams(replaceTemplate, configParam, '++')
                    })
                }
                else {
                    return []
                }
            },
            getTemplateValue(value, params, paramPrefix) {
                if (typeof value == 'string') {
                    if (value.indexOf(paramPrefix) == 0) {
                        let valueToCheck = value.substring(paramPrefix.length)
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
