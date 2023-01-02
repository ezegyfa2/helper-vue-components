<template lang="pug">
    include Template.pug
</template>

<script>
    import SessionMessages from './../SessionMessages/SessionMessages.vue'

    export default {
        mixins: [
            SessionMessages,
        ],
        props: {
            navbar_section: {
                type: Object
            },
            header_section: {
                type: Object
            },
            content_sections: {
                type: Array
            },
            contact_section: {
                type: Object
            },
            footer_section: {
                type: Object
            }
        }
    }
</script>
