<template lang="pug">
    include Template.pug
</template>

<script>
    import NumberInput from './../../../FormItemsWithoutLabel/Inputs/Number/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            NumberInput,
            FormItemWithLabel,
        ]
    }
</script>
