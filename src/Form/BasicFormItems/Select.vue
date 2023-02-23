<script>
    import FormItemWithValue from './FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValue,
        ],
        props: {
            options: {
                type: Array
            },
            kerek_meret: {
                type: Number
            }
        },
        computed: {
            optionValues() {
                return this.options.map((option) => {
                    return this.getOptionValue(option)
                })
            }
        },
        methods: {
            getOptionValue(option) {
                if (option && typeof(option) == 'object') {
                    return option.value
                }
                else {
                    return option
                }
            }
        }
    }
</script>
