<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
            title_section: {
                type: Object
            },
            contact_icons_section: {
                type: Object
            },
        },
        data() {
            return {
                imageWidths: [
                    208,
                    208,
                    208,
                    208,
                    208,
                    208,
                    208,
                ]
            }
        },
    }
</script>
