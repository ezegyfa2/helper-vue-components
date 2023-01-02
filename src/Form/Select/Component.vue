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
                    if (newSelectedOption) {
                        if (this.currentValue != newSelectedOption.value) {
                            this.currentValue = newSelectedOption.value
                        }
                    }
                    else {
                        this.currentValue = null
                    }
                }
            },
            currentValue: {
                immediate: true,
                handler(newValue) {
                    if (this.selectedOption && this.selectedOption.value != newValue) {
                        this.currentValue = newValue
                        this.selectedOption = this.getSelectedOption()
                    }
                }
            }
        },
        methods: {
            getSelectedOption() {
                for (const option of this.options) {
                    if (option.value == this.currentValue) {
                        return option
                    }
                }
                return null
            }
        }
    }
</script>
