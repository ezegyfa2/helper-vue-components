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
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            from_value: {
                type: String|Number
            },
            to_value: {
                type: String|Number
            },
            validation_errors: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            updateValues(newValues) {
                console.log(newValues)
            }
        }
    }
</script>
