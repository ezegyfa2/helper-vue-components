<script>
    export default {
        props: {
            success_message_sections: {
                type: Array,
                deafult() {
                    return []
                }
            },
            error_message_sections: {
                type: Array,
                deafult() {
                    return []
                }
            },
            info_message_sections: {
                type: Array,
                deafult() {
                    return []
                }
            },
            warning_message_sections: {
                type: Array,
                deafult() {
                    return []
                }
            }
        }
    }
</script>
