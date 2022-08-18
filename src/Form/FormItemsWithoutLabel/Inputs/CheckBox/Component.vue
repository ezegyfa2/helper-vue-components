<template lang="pug">
    include Template.pug
</template>

<script>
    import CheckBoxInput from './../../../BasicFormItems/Inputs/CheckBox.vue'
    import ValidationErrors from './../../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            CheckBoxInput,
            ValidationErrors,
        ]
    }
</script>
