<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from '../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            content: {
                type: String
            },
            url: {
                type: String
            },
            icon_class: {
                type: String
            }
        }
    }
</script>
