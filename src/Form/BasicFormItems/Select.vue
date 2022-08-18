<script>
    import FormItem from './FormItem.vue'

    export default {
        mixins: [
            FormItem
        ],
        props: {
            default_selected_option_key: {
                type: String
            },
            options: {
                type: Array
            }
        },
        data() {
            return {
                selectedOptionKey: null
            }
        },
        mounted() {
            this.selectedOptionKey = this.default_selected_option_key
        }
    }
</script>
