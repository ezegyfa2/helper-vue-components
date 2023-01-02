<template lang="pug">
    include Template.pug
</template>

<script>
    import DateTimeInput from './../../../FormItemsWithoutLabel/Inputs/DateTime/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            DateTimeInput,
            FormItemWithLabel,
        ]
    }
</script>
