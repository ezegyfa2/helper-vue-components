<template lang="pug">
    include Template.pug
</template>

<script>
    import EmailInput from './../../../BasicFormItems/Inputs/Email.vue'
    import ValidationErrors from './../../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            EmailInput,
            ValidationErrors,
        ]
    }
</script>
