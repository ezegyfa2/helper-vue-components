<template lang="pug">
    include Template.pug
</template>

<script>
    import CheckBoxInput from './../../../FormItemsWithoutLabel/Inputs/CheckBox/Component.vue'
    import FormItemWithLabel from './../../FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            CheckBoxInput,
            FormItemWithLabel,
        ]
    }
</script>
