<script>
    import ReactiveWindowSize from 'helper-vue-components/ReactiveProperties/WindowSize/Component.vue'

    export default {
        mixins: [
            ReactiveWindowSize,
        ],
        methods: {
            getCalculatedWidthUrl(widths, src) {
                return '/images/' + src + '/' + this.getCalculatedWidth(widths) + '.webp'
            },
            getCalculatedWidth(widths) {
                if (widths.length > 8) {
                    throw new Error('Invalid width length')
                }
                else if (this.windowSize.width > 2560) {
                    return this.getWidth(widths, 7)
                }
                else if (this.windowSize.width > 1440) {
                    return this.getWidth(widths, 6)
                }
                else if (this.windowSize.width > 1024) {
                    return this.getWidth(widths, 5)
                }
                else if (this.windowSize.width > 768) {
                    return this.getWidth(widths, 4)
                }
                else if (this.windowSize.width > 425) {
                    return this.getWidth(widths, 3)
                }
                else if (this.windowSize.width > 375) {
                    return this.getWidth(widths, 2)
                }
                else if (this.windowSize.width > 320) {
                    return this.getWidth(widths, 1)
                }
                else {
                    return this.getWidth(widths, 0)
                }
            },
            getWidth(widths, withNumber) {
                if (widths.length >= withNumber + 1) {
                    return widths[withNumber]
                }
                else {
                    return widths[widths.length - 1]
                }
            }
        }
    }
</script>
