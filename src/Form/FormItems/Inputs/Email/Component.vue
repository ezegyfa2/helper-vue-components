<template lang="pug">
    include Template.pug
</template>

<script>
    import EmailInput from './../../../FormItemsWithoutLabel/Inputs/Email/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            EmailInput,
            FormItemWithLabel,
        ]
    }
</script>
