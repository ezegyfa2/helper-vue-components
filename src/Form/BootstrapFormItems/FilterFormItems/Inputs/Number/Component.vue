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
                type: String|Number
            },
            to_value: {
                type: String|Number
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
        },
        computed: {
            fromName() {
                return 'from_' + this.name
            },
            toName() {
                return 'to_' + this.name
            }
        },
        methods: {
            changeFromValue(newFromValue) {
                if (typeof newFromValue !== 'undefined' && newFromValue !== null && newFromValue !== '') {
                    this.$nextTick(() => {
                        this.$emit('update:from_value', parseInt(newFromValue))
                    })
                }
            },
            changeToValue(newToValue) {
                if (typeof newToValue !== 'undefined' && newToValue !== null && newToValue !== '') {
                    this.$nextTick(() => {
                        this.$emit('update:to_value', parseInt(newToValue))
                    })
                }
            }
        }
    }
</script>
