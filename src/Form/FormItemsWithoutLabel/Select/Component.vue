<template lang="pug">
    include Template.pug
</template>

<script>
    import Select from './../../BasicFormItems/Select.vue'
    import ValidationErrors from './../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            Select,
            ValidationErrors,
        ],
        props: {
            data_url: {
                type: String
            },
            data_infos: {
                type: Object
            }
        }
    }
</script>
