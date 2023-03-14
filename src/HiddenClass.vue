<script>
    export default {
        data() {
            return {
                isVisible: true
            }
        },
        computed: {
            hiddenClass() {
                if (this.isVisible) {
                    return ''
                }
                else {
                    return 'is-hidden'
                }
            }
        }
    }
</script>
