<script>
    import FormItem from './FormItem.vue'

    export default {
        mixins: [
            FormItem,
        ],
        props: {
            value: {},
        },
        data() {
            return {
                currentValue: null,
                currentValueChanges: []
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(newValue) {
                    if (typeof newValue !== 'undefined' && newValue !== null && !this.isCurrentValueChange(newValue)) {
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
                        this.currentValueChanges.push({
                            value: newValue,
                            time: Date.now()
                        })
                        this.$emit('update:value', newValue)
                    }
                },
                flush: 'sync'
            }
        },
        methods: {
            updateCurrentValueChanges() {
                let currentTime = Date.now()
                while (this.currentValueChanges.length > 0 && currentTime - this.currentValueChanges[0].time > 10000) {
                    this.currentValueChanges = this.currentValueChanges.slice(1)
                }
            },
            isCurrentValueChange(valueToCheck) {
                for (let currentValueChange of this.currentValueChanges) {
                    if (currentValueChange.value == valueToCheck) {
                        return true
                    }
                }
                return false
            }
        }
    }
</script>
