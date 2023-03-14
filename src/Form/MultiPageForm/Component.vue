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
                    ++this.currentPageNumber
                    if (this.onNextPage) {
                        this.onNextPage()
                    }
                }
            },
            getInvalidFormSection() {
                for (let formItemSection of this.form_item_sections[this.currentPageNumber]) {
                    let htmlElement = this.$refs[formItemSection.data.name][0].$refs['inputElement']
                    if (!htmlElement.checkValidity()) {
                        return htmlElement
                    }
                }
                return null
            },
            back() {
                if (this.currentPageNumber > 0) {
                    --this.currentPageNumber
                }
            }
        }
    }
</script>
