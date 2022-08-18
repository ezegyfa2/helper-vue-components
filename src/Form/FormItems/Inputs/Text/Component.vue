<template lang="pug">
    include Template.pug
</template>

<script>
    import TextInput from './../../../FormItemsWithoutLabel/Inputs/Text/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            TextInput,
            FormItemWithLabel,
        ]
    }
</script>
