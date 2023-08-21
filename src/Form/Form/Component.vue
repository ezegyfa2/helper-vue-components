<template lang="pug">
    include Template.pug
</template>

<script>
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
                return this.form_item_sections.map(formItemSection => {
                    return {
                        type: this.getConvertedType(formItemSection.type),
                        data: formItemSection.data
                    }
                })
            }
        },
        methods: {
            getConvertedType(formItemType) {
                if (this.formItemTypePrefix) {
                    return this.formItemTypePrefix + '-' + formItemType
                }
                else if (this.formItemConvertTypes[formItemType]) {
                    return this.formItemConvertTypes[formItemType]
                }
                else {
                    return formItemType
                }
            },
            getRequestData(formItemSections) {
                let data = {}
                formItemSections.forEach(formItemSection => {
                    data[formItemSection.data.name] = formItemSection.data.value
                })
                data._token = document.querySelector('meta[name="csrf-token"]').content
                return data
            },
            submitForm (e) {
                this.submitted = true
                return true
            }
        }
    }
</script>
