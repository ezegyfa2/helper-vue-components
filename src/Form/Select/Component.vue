<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            name: {
                type: String
            },
            options: {
                type: Array
            },
            default_selected_option_key: {
                type: Number
            }
        },
        data() {
            return {
                selectedOption: 0
            }
        },
        mounted() {
            if (this.default_selected_option_key) {
                this.selectedOption = this.default_selected_option_key
            }
            let self = this
            this.$refs.selectElement.addEventListener('change', (event) => {
                self.$emit('update:selectedOption', parseInt(event.target.value))
            })
        },
        computed: {
            configuredOptions() {
                return this.options.map(option => {
                    console.log(typeof(option))
                    if (typeof(option) == 'object') {
                        return option
                    }
                    else {
                        return {
                            value: option,
                            label: option
                        }
                    }
                })
            }
        },
        watch: {
            selectedOption(newSelectedOption) {
                this.$refs.selectElement.value = newSelectedOption
            }
        }
    }
</script>
