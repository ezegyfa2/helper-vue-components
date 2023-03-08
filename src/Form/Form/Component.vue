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
            getConvertedType(formItemType) {
                if (this.formItemTypePrefix) {
                    return this.formItemTypePrefix + '-' + formItemType
                }
                else if (this.formItemConvertTypes[formItem.type]) {
                    return this.formItemConvertTypes[formItemType]
                }
                else {
                    return formItemType
                }
            },
            submitForm (e) {
                this.submitted = true
                return true
            }
        }
    }
</script>
