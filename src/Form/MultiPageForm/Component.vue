<template lang="pug">
    include Template.pug
</template>

<script>
    import Form from '../Form/Component.vue'

    export default {
        mixins: [
            Form
        ],
        props: {
            next_button_title: {
                type: String
            },
            back_button_title: {
                type: String
            }
        },
        data() {
            return {
                currentPageNumber: 0
            }
        },
        computed: {
            convertedFormItemSections() {
                return this.convertFormItemSections(this.form_item_sections[this.currentPageNumber])
            }
        },
        methods: {
            next() {
                let invalidHtmlElement = this.getInvalidFormSection()
                if (invalidHtmlElement) {
                    invalidHtmlElement.reportValidity()
                }
                else if (this.currentPageNumber < this.form_item_sections.length - 1) {
                    setTimeout(() => {
                        ++this.currentPageNumber
                        if (this.onNextPage) {
                            this.onNextPage()
                        }
                    }, 100)
                }
            },
            getInvalidFormSection() {
                for (let formItemSection of this.form_item_sections[this.currentPageNumber]) {
                    let htmlSelection = this.$refs[formItemSection.data.name][0].$refs['inputElement']
                    // In case of radio buttons
                    if (Array.isArray(htmlSelection)) {
                        for (let htmlElement of htmlSelection) {
                            if (!htmlElement.checkValidity()) {
                                return htmlElement
                            }
                        }
                    }
                    else if (!htmlSelection.checkValidity()) {
                        return htmlSelection
                    }
                }
                return null
            },
            back() {
                if (this.currentPageNumber > 0) {
                    --this.currentPageNumber
                }
            },
            getHiddenStyle(formItemSections) {
                if (formItemSections == this.form_item_sections[this.currentPageNumber]) {
                    return ''
                }
                else {
                    return 'display: none'
                }
            }
        }
    }
</script>
