<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            item_text: {
                type: String
            },
            is_selected: {
                type: Boolean,
                default: false
            },
            is_selectable: {
                type: Boolean,
                default: true
            },
            url: {
                type: String,
                default: '#'
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
                    return 'unclickable'
                }
            }
        },
        methods: {
            itemSelected() {
                this.$emit('itemSelected')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
