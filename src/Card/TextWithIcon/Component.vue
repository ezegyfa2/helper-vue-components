<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            },
            icon_class: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
