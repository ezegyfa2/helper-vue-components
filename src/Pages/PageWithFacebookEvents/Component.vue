<script>
    import Page from '../Page/Component.vue'

    export default {
        mixins: [
            Page,
        ],
        props: {
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
