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
            title_section: {
                type: Object
            },
            timeline_section: {
                type: Object
            }
        }
    }
</script>
