<template lang="pug">
    include Template.pug
</template>

<script>
    import FormItemWithValue from '../../BasicFormItems/FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValue,
        ],
        props: {
            options: {
                type: Array
            }
        }
    }
</script>
