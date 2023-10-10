<template lang="pug">
include Template.pug
</template>

<script>
    import ClassAdder from 'helper-vue-components/ClassAdder/Component.vue'

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
            tab_index: {
                type: Number
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
