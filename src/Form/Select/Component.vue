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
            },
            data_url: {
                type: String
            },
            data_infos: {
                type: Object
            }
        },
        data() {
            return {
                selectedOption: null
            }
        },
        watch: {
            selectedOption: {
                handler(newSelectedOption) {
                    if (newSelectedOption && this.getOptionValue(this.value) != this.getOptionValue(newSelectedOption)) {
                        //this.value = this.getOptionValue(newSelectedOption)
                        this.$emit('update:value', this.getOptionValue(newSelectedOption))
                    }
                },
                flush: 'sync'
            },
            value: {
                immediate: true,
                handler(newValue) {
                    if (newValue && (!this.selectedOption || this.getOptionValue(this.selectedOption) != this.getOptionValue(newValue))) {
                        this.selectedOption = this.getSelectedOption()
                    }
                },
                flush: 'sync'
            }
        },
        methods: {
            getSelectedOption() {
                for (const option of this.options) {
                    if (this.getOptionValue(option) == this.value) {
                        return option
                    }
                }
                return null
            }
        }
    }
</script>
