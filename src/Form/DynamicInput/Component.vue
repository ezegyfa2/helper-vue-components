<script>
    export default {
        props: {
            label: {
                type: String
            },
            name: {
                type: String
            },
            required: {
                type: Boolean
            },
            type: {
                type: String
            },
            value_type: {
                type: String
            },
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            default: {},
            validation_errors: {
                type: Array
            }
        },
        computed: {
            isNumberInput() {
                return this.type == 'input' && this.value_type == 'number'
            },
            isTextInput() {
                return this.type == 'input' && (this.value_type == 'text' || this.value_type == 'email' || this.value_type == 'tel')
            },
            isTextArea() {
                return this.type == 'textarea'
            },
            invalidClass() {
                if (this.validation_errors && this.validation_errors.length > 0) {
                    return 'is-invalid'
                }
                else {
                    return null
                }
            },
            defaultValue() {
                if (this.default == 'CURRENT_TIMESTAMP') {
                    return Date.now()
                }
                else {
                    return this.default
                }
            }
        }
    }
</script>
