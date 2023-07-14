<template lang="pug">
    include Template.pug
</template>

<script>
    import SessionMessages from '../../SessionMessages/SessionMessages.vue'

    export default {
        mixins: [
            SessionMessages,
        ],
        props: {
            navigation_bar_section: {
                type: Object
            },
            header_section: {
                type: Object
            },
            content_sections: {
                type: Array
            },
            footer_section: {
                type: Object
            },
            event_infos: {
                designIgnored: true,
                type: Array,
                default() {
                    return []
                }
            }
        },
        beforeMount() {
            this.event_infos.forEach(eventInfo => {
                sendFacebookAPIEvent(eventInfo.name, eventInfo.id, eventInfo.email, eventInfo.customData)
            })
        },
    }
</script>
