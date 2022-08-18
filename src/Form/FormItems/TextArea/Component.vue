<template lang="pug">
    include Template.pug
</template>

<script>
    import TextArea from './../../FormItemsWithoutLabel/TextArea/Component.vue'
    import FormItemWithLabel from './../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            TextArea,
            FormItemWithLabel,
        ]
    }
</script>
