<script>
    import FormItem from './FormItem.vue'
    import DataTransmitting from '../../DataTransmitting.vue'

    export default {
        mixins: [
            FormItem,
            DataTransmitting,
        ],
        props: {
            value: {},
        },
        data() {
            return {
                currentValue: null,
                dataTransmits: {
                    currentValue: 'value'
                }
            }
        },
        watch: {
            currentValue: {
                immediate: true,
                handler(newValue) {
                    console.log('currentValue ' + newValue)
                    this.$emit('update:value', newValue)
                }
            }
        }
    }
</script>
