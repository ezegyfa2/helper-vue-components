<template lang="pug">
    include Template.pug
</template>

<script>
    import ReactiveComponentSize from 'helper-vue-components/ReactiveProperties/ComponentSize/Component.vue'
    import ImageSize from 'helper-vue-components/ImageSize/Component.vue'

    export default {
        mixins: [
            ReactiveComponentSize,
            ImageSize,
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
                if (this.src && this.width) {
                    if (this.widths) {
                        return this.getCalculatedWidthUrl(this.widths, this.src)
                    }
                    else {
                        return 'get-image?path=' + this.src + '&width=' + this.width
                    }
                }
                else {
                    return ''
                }
            },
            currentWidth() {
                return this.getCalculatedWidth(this.widths)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
