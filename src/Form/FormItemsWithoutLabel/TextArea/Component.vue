<template lang="pug">
    include Template.pug
</template>

<script>
    import TextArea from './../../BasicFormItems/TextArea.vue'
    import ValidationErrors from './../FormItemWithValidationErrors/Component.vue'

    export default {
        mixins: [
            TextArea,
            ValidationErrors,
        ]
    }
</script>
