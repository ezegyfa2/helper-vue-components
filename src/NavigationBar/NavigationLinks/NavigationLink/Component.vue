<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from './../../../ClassAdder.vue'

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
            added_classes: {
                type: Object,
                default () {
                    return {
                        'li': 'text-uppercase'
                    }
                }
            }
        }
    }
</script>
