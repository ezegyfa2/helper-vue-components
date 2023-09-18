<script>
    export default {
        data() {
            return {
                windowSize: {
                    width: 0,
                    height: 0
                },
            }
        },
        mounted() {
            this.updateWindowSize()
            window.addEventListener('resize', () => {
                this.updateWindowSize()
            })
        },
        methods: {
            updateWindowSize() {
                this.windowSize.width = window.innerWidth
                this.windowSize.height = window.innerHeight
            },
        },
    }
</script>
