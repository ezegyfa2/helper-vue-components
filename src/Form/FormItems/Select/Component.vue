<template lang="pug">
    include Template.pug
</template>

<script>
    import Select from './../../FormItemsWithoutLabel/Select/Component.vue'
    import FormItemWithLabel from './../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            Select,
            FormItemWithLabel,
        ]
    }
</script>
