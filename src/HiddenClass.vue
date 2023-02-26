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
        computed: {
            hiddenClass() {
                if (this.is_visible && this.is_visible) {
                    return ''
                }
                else {
                    return 'is-hidden'
                }
            }
        }
    }
</script>
