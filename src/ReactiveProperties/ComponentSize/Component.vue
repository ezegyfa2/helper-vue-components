<script>
    export default {
        data() {
            return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
        },
        mounted() {
            this.updateSize()
            window.addEventListener('resize', () => {
                this.updateSize()
            })
        },
        computed: {
            bottomPosition() {
                return this.top + this.height
            }
        },
        methods: {
            updateSize() {
                const el = this.$el
                this.$set(this, 'left', el.offsetLeft)
                this.$set(this, 'top', el.offsetTop)
                this.$set(this, 'width', el.offsetWidth)
                this.$set(this, 'height', el.offsetHeight)
            },
        },
    }
</script>
