<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
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
        },
        watch: {
            page_count: {
                immediate: true,
                handler(newPageCount) {
                    if (this.pageCount != newPageCount) {
                        this.pageCount = newPageCount
                    }
                }
            },
            selected_page_number: {
                immediate: true,
                handler(newSelectedPageNumber) {
                    if (this.selectedPageNumber != newSelectedPageNumber) {
                        this.selectedPageNumber = newSelectedPageNumber
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
