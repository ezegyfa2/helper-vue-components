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
            setTimeout(() => {
                this.close()
            }, 5000)
        },
        methods: {
            close() {
                this.isVisible = false
            }
        }
    }
</script>
