<script>
    import FormItem from '../FormItem.vue'

    export default {
        mixins: [
            FormItem
        ],
        props: {
            default: {
                type: Boolean
            }
        },
        data() {
            return {
                checked: null
            }
        },
        mounted() {
            this.checked = this.default
        }
    }
</script>
