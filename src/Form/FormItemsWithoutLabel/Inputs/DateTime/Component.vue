<template lang="pug">
    include Template.pug
</template>

<script>
    import DateTimeInput from './../../../BasicFormItems/Inputs/DateTime.vue'
    import ValidationErrors from './../../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            DateTimeInput,
            ValidationErrors,
        ]
    }
</script>
