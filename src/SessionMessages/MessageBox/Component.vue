<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            content: {
                type: String
            },
            is_visible: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {
                iconClass: '',
                isVisible: true
            }
        },
        mounted() {
            let self = this
            setTimeout(function() {
                self.close()
            }, 5000)
        },
        computed: {
            hiddenClass() {
                if (this.isVisible && this.is_visible) {
                    return ''
                }
                else {
                    return 'is-hidden'
                }
            }
        },
        methods: {
            close() {
                this.isVisible = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>