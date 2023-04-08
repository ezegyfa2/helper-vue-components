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
            url_enabled: {
                type: Boolean,
                default: true
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
                return this.selected_page_number < this.page_count
            },
            isPreviousSelectable() {
                return this.selected_page_number > 1
            },
            hasValidParams() {
                return Number.isInteger(this.page_count) && Number.isInteger(this.selected_page_number)
            }
        },
        methods: {
            isSelected(pageNumber) {
                return pageNumber == this.selected_page_number
            },
            getUrl(pageNumber) {
                if (this.url_enabled) {
                    let link = new URL(window.location)
                    link.searchParams.set('page-number', pageNumber)
                    return link.toString()
                }
                else {
                    return '#'
                }
            },
            selectPage(pageNumber) {
                this.$emit('update:selected_page_number', pageNumber)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
