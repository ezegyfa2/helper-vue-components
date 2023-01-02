<script>
    import FormItemWithValueVue from '../FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValueVue
        ],
        props: {
            value: {
                designType: Boolean
            }
        },
        computed: {
            convertedValue() {
                if (this.value === true || this.value == '1') {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
</script>
