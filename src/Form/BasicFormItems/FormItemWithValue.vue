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
        methods: {
            changeValue(newValue) {
                this.$emit('update:value', newValue)
            }
        }
    }
</script>
