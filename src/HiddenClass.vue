<script>
    export default {
        props: {
            is_visible: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {
                isVisible: true
            }
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
        }
    }
</script>
