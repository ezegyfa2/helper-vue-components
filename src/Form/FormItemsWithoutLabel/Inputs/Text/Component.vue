<template lang="pug">
    include Template.pug
</template>

<script>
    import TextInput from './../../../BasicFormItems/Inputs/Text.vue'
    import ValidationErrors from './../../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            TextInput,
            ValidationErrors,
        ]
    }
</script>
