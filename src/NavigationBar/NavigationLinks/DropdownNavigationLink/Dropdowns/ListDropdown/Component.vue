<template lang="pug">
    include Template
</template>

<script>
    import ClassAdder from '../../../../../ClassAdder.vue'

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
