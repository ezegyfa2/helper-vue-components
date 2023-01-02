<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from '../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            url: {
                type: String
            },
            content: {
                type: String
            }
        }
    }
</script>
