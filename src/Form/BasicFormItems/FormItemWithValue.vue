<script>
    import FormItem from './FormItem.vue'

    export default {
        mixins: [
            FormItem
        ],
        props: {
            default: {},
        },
        data() {
            return {
                value: null
            }
        },
        mounted() {
            this.value = this.default
        }
    }
</script>
