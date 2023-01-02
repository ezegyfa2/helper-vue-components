<template lang="pug">
    include Template.pug
</template>

<script>
    import Header from './../Header/Component.vue'

    export default {
        mixins: [
            Header,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
