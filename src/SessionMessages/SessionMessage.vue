<script>
    import HiddenClass from './../HiddenClass.vue'

    export default {
        mixins: [
            HiddenClass,
        ],
        props: {
            content: {
                type: String
            }
        },
        data() {
            return {
                iconClass: ''
            }
        },
        mounted() {
            let self = this
            setTimeout(() => {
                self.close()
            }, 5000)
        },
        methods: {
            close() {
                this.isVisible = false
            }
        }
    }
</script>
