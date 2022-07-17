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
            selected_option: {
                type: Number
            }
        },
        mounted() {
            if (!this.selected_option) {
                this.selected_option = this.options[0].value
            }
            let self = this
            this.$refs.selectElement.addEventListener('change', (event) => {
                self.$emit('update:selected_option', parseInt(event.target.value))
            })
        },
        computed: {
            configuredOptions() {
                return this.options.map(option => {
                    if (typeof(option) == Object) {
                        return option
                    }
                    else {
                        return {
                            value: option,
                            text: option
                        }
                    }
                })
            }
        },
        watch: {
            selected_option(newSelectedOption) {
                this.$refs.selectElement.value = newSelectedOption
            }
        }
    }
</script>
