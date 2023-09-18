<template lang="pug">
    include Template
</template>

<script>
    import ClassAdder from 'helper-vue-components/ClassAdder/Component.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            dropdown_link_id: {
                type: String
            },
            dropdown_item_sections: {
                type: Array
            }
        }
    }
</script>
