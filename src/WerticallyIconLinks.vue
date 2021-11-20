<template lang="pug">
    include WerticallyIconLinks.pug
</template>

<script>
    export default {
        props: {
            icon_links: {
                type: Array
            }
        }
    }
</script>

<style type="text/css" scoped>
    a {
        text-align: center;
        height: 3rem;
        width: 3rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        line-height: 3rem;
        color: rgba(255, 255, 255, 0.3);
    }
</style>
