<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            url: {
                type: String
            },
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
            // TEST
            test_array: {
                type: Array,
                itemType: String
            },
            test_section: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
