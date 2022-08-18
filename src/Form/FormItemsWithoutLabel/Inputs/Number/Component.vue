<template lang="pug">
    include Template.pug
</template>

<script>
    import NumberInput from './../../../BasicFormItems/Inputs/Number.vue'
    import ValidationErrors from './../../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            NumberInput,
            ValidationErrors,
        ]
    }
</script>
