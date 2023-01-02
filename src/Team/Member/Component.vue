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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
