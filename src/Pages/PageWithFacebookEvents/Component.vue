<script>
    import Page from '../Page/Component.vue'

    export default {
        mixins: [
            Page,
        ],
        props: {
            event_infos: {
                type: Array
            }
        },
        beforeMount() {
            this.event_infos.forEach(eventInfo => {
                sendFacebookAPIEvent(eventInfo.name, eventInfo.id, eventInfo.email, eventInfo.customData)
            })
        },
    }
</script>
