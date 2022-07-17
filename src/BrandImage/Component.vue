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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
