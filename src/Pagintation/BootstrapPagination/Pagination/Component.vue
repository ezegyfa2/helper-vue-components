<template lang="pug">
    include Template.pug
</template>

<script>
    import DataTransmitting from '../../../DataTransmitting.vue'

    export default {
        mixins: [
            DataTransmitting,
        ],
        props: {
            selected_page_number: {
                type: Number
            },
            page_count: {
                type: Number
            },
        }, 
        data() {
            return {
                selectedPageNumber: 0,
                pageCount: 3,
                dataTransmits: {
                    pageCount: 'page_count',
                    selectedPageNumber: 'selected_page_number'
                },
            }
        },
        computed: {
            itemClass() {
                if (this.is_selected) {
                    return 'active nonclickable'
                }
                else if (this.is_selectable) {
                    return ''
                }
                else {
                    return 'nonclickable'
                }
            },
            isNextSelectable() {
                return this.selectedPageNumber < this.page_count
            },
            isPreviousSelectable() {
                return this.selectedPageNumber > 1
            },
            hasValidParams() {
                return Number.isInteger(this.pageCount) && Number.isInteger(this.selectedPageNumber)
            }
        },
        methods: {
            isSelected(pageNumber) {
                return pageNumber == this.selectedPageNumber
            },
            getUrl(pageNumber) {
                let link = new URL(window.location)
                link.searchParams.set('page-number', pageNumber)
                return link.toString()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
