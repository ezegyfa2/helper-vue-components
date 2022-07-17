<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        computed: {
            token() {
                return document.querySelector('meta[name="csrf-token"]').content
            }
        }
    }
</script>
