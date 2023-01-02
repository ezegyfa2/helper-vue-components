<script>
    import FormItemWithValue from './FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValue,
        ],
        props: {
            options: {
                type: Array
            }
        },
        computed: {
            optionValues() {
                return this.options.map((option) => {
                    return option.value
                })
            }
        }
    }
</script>
