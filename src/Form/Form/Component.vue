<template lang="pug">
    include Template.pug
</template>

<script>
    import clone from 'just-clone'

    export default {
        props: {
            url: {
                type: String
            },
            method: {
                type: String,
                default: 'post'
            },
            button_title: {
                type: String
            },
            form_item_sections: {
                type: Array
            }
        },
        data() {
            return {
                formItemTypePrefix: null,
                formItemConvertTypes: {
                    select: 'vue-select',
                },
                submitted: false
            }
        },
        computed: {
            convertedFormItemSections() {
                return this.convertFormItemSections(this.form_item_sections)
            }
        },
        methods: {
            convertFormItemSections(formItemSections) {
                let self = this
                return formItemSections.map((formItem) => {
                    let convertedFormItem = clone(formItem)
                    if (self.formItemTypePrefix) {
                        convertedFormItem.type = self.formItemTypePrefix + '-' + formItem.type
                    }
                    else if (self.formItemConvertTypes[formItem.type]) {
                        convertedFormItem.type = self.formItemConvertTypes[formItem.type]
                    }
                    return convertedFormItem
                })
            },
            submitForm (e) {
                this.submitted = true
                return true
            }
        }
    }
</script>
