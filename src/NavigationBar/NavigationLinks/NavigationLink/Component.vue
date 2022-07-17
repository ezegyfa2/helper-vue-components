<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from './../../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        data() {
            return {
                addedClasses: {
                    'li': 'text-uppercase'
                }
            }
        },
        props: {
            content: {
                type: String
            },
            url: {
                type: String
            }
        }
    }
</script>
