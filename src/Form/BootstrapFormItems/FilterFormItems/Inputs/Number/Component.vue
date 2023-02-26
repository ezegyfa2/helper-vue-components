<template lang="pug">
    include Template.pug
</template>

<script>
    import DataTransmitting from '../../../../../DataTransmitting.vue'

    export default {
        mixins: [
            DataTransmitting,
        ],
        props: {
            name: {
                type: String
            },
            label: {
                type: String
            },
            from_label: {
                type: String
            },
            to_label: {
                type: String
            },
            from_value: {
                type: Number
            },
            to_value: {
                type: Number
            },
            from_validation_errors: {
                type: Array,
                default() {
                    return []
                }
            },
            to_validation_errors: {
                type: Array,
                default() {
                    return []
                }
            }
        }
        computed: {
            fromName() {
                return 'from_' + this.name
            },
            toName() {
                return 'to_' + this.name
            }
        },
        watch: {
            fromValue: {
                immediate: true,
                handler(newFromValue) {
                    console.log(newFromValue)
                    if (typeof newFromValue !== 'undefined' && newFromValue !== null && newFromValue !== '') {
                        this.$nextTick(() => {
                            this.$emit('update:from_value', parseInt(newFromValue))
                        })
                    }
                },
                flush: 'sync'
            },
            toValue: {
                immediate: true,
                handler(newToValue) {
                    console.log(newToValue)
                    if (typeof newToValue !== 'undefined' && newToValue !== null && newToValue !== '') {
                        this.$nextTick(() => {
                            this.$emit('update:to_value', parseInt(newToValue))
                        })
                    }
                }
            }
        }
    }
</script>
