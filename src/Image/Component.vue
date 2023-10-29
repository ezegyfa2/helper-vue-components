<template lang="pug">
    include Template.pug
</template>

<script>
    import ReactiveComponentSize from 'helper-vue-components/ReactiveProperties/ComponentSize/Component.vue'
    import ReactiveWindowSize from 'helper-vue-components/ReactiveProperties/WindowSize/Component.vue'

    export default {
        mixins: [
            ReactiveComponentSize,
            ReactiveWindowSize,
        ],
        props: {
            src: {
                type: String
            },
            alt: {
                type: String
            },
            lazy_load: {
                type: Boolean,
                default: true
            },
            widths: {
                type: Array
            }
        },
        computed: {
            srcWithSize() {
                if (this.src) {
                    if (this.widths) {
                        return '/images/' + this.src + '/' + this.currentWidth + '.webp'
                    }
                    else if (this.width) {
                        return 'get-image?path=' + this.src + '&width=' + this.width
                    }
                    else {
                        return this.src
                    }
                }
                else {
                    return ''
                }
            },
            currentWidth() {
                if (this.widths) {
                    if (this.widths.length > 8) {
                        throw new Error('Invalid width length')
                    }
                    else if (this.windowSize.width > 2560) {
                        return this.getWidth(7)
                    }
                    else if (this.windowSize.width > 1440) {
                        return this.getWidth(6)
                    }
                    else if (this.windowSize.width > 1024) {
                        return this.getWidth(5)
                    }
                    else if (this.windowSize.width > 768) {
                        return this.getWidth(4)
                    }
                    else if (this.windowSize.width > 425) {
                        return this.getWidth(3)
                    }
                    else if (this.windowSize.width > 375) {
                        return this.getWidth(2)
                    }
                    else if (this.windowSize.width > 320) {
                        return this.getWidth(1)
                    }
                    else {
                        return this.getWidth(0)
                    }
                }
                else {
                    return null
                }
            }
        },
        methods: {
            getWidth(withNumber) {
                if (this.widths.length >= withNumber + 1) {
                    return this.widths[withNumber]
                }
                else {
                    return this.widths[this.widths.length - 1]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
