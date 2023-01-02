<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            url: {
                type: String
            },
            video_type: {
                type: String
            },
            poster_url: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
