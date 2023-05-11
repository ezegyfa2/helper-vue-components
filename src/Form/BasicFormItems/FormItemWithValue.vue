<script>
    import FormItem from './FormItem.vue'
    import CurrentChangeChecker from '../../CurrentChangeChecker.vue'

    export default {
        mixins: [
            FormItem,
            CurrentChangeChecker,
        ],
        props: {
            value: {},
        },
        data() {
            return {
                currentValue: null,
            }
        },
        beforeUnmount() {
            console.log('unmount')
        },
        watch: {
            value: {
                immediate: true,
                handler(newValue) {
                    if (typeof newValue !== 'undefined' && newValue !== null && !this.isCurrentValueChange(newValue, 'value')) {
                        this.currentValue = newValue
                    }
                },
                flush: 'sync'
            },
            currentValue: {
                immediate: true,
                handler(newValue) {
                    if (typeof newValue !== 'undefined' && newValue !== null && newValue != this.value) {
                        this.updateCurrentValueChanges()
                        this.addCurrentValueChange(newValue, 'value')
                        this.$emit('update:value', newValue)
                    }
                },
                flush: 'sync'
            }
        }
    }
</script>
