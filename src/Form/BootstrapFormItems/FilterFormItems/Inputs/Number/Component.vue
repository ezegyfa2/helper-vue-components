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
        }
    }
</script>
