<template lang="pug">
    include Template.pug
</template>

<script>
    import PhoneInput from './../../../FormItemsWithoutLabel/Inputs/Phone/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
        PhoneInput,
            FormItemWithLabel,
        ]
    }
</script>
