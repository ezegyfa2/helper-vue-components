<script>
    import FormItemWithValue from '../FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValue
        ],
        props: {
            min: {
                type: Number
            },
            max: {
                type: Number
            }
        },
        methods: {
            getInputValue(input) {
                return parseInt(input.value)
            }
        }
    }
</script>
