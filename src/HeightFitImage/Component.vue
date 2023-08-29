<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            src: {
                type: String
            },
            alt: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
