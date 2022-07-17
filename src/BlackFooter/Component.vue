<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            content: {
                type: String
            }
        }
    }
</script>

<style type="less" scoped>
    @import "Style.scss";
</style>
