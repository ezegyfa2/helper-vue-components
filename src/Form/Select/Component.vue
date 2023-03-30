<template lang="pug">
    include Template.pug
</template>

<script>
    import Select from '../BasicFormItems/Select.vue'

    export default {
        mixins: [
            Select,
        ],
        props: {
            live_search: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                selectedOption: null
            }
        },
        computed: {
            configuredOptions() {
                return this.options.map(option => {
                    if (typeof(option) == 'object') {
                        return option
                    }
                    else {
                        return {
                            value: option,
                            text: option
                        }
                    }
                })
            },
            liveSearch() {
                return this.live_search && (this.options.length > 15)
            }
        },
        watch: {
            selectedOption: {
                handler(newSelectedOption) {
                    if (newSelectedOption && this.getOptionValue(this.value) != this.getOptionValue(newSelectedOption)) {
                        this.$emit('update:value', this.getOptionValue(newSelectedOption))
                    }
                },
                flush: 'sync'
            },
            value: {
                immediate: true,
                handler(newValue) {
                    console.log('value ' + newValue)
                    if (newValue && (!this.selectedOption || this.getOptionValue(this.selectedOption) != this.getOptionValue(newValue))) {
                        this.selectedOption = this.getSelectedOption()
                    }
                },
                flush: 'sync'
            }
        },
        methods: {
            getSelectedOption() {
                for (const option of this.configuredOptions) {
                    if (this.getOptionValue(option) == this.value) {
                        return option
                    }
                }
                return null
            }
        }
    }
</script>
