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
                selectedOption: {}
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
                immediate: true,
                handler(newSelectedOption) {
                    if (newSelectedOption && this.getOptionValue(this.currentValue) != this.getOptionValue(newSelectedOption)) {
                        this.currentValue = this.getOptionValue(newSelectedOption)
                    }
                }
            },
            currentValue: {
                immediate: true,
                handler(newValue) {
                    console.log('currentValue ' + newValue)
                    if (!this.selectedOption || this.getOptionValue(this.selectedOption) != this.getOptionValue(newValue)) {
                        this.currentValue = this.getOptionValue(newValue)
                        this.selectedOption = this.getSelectedOption()
                        console.log('selectedOption ' + this.selectedOption)
                    }
                }
            }
        },
        methods: {
            getSelectedOption() {
                for (const option of this.options) {
                    if (this.getOptionValue(option) == this.currentValue) {
                        return option
                    }
                }
                return null
            },
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
