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
            console.log('start')
            setTimeout(() => {
                console.log('end')
                this.close()
            }, 5000)
        },
        methods: {
            close() {
                console.log('close')
                this.isVisible = false
            }
        }
    }
</script>
