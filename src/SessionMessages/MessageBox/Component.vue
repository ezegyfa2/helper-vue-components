<template lang="pug">
    include Template.pug
</template>

<script>
    import SessionMessage from '../SessionMessage.vue'

    export default {
        mixins: [
            SessionMessage,
        ],
        data() {
            return {
                iconClass: ''
            }
        }
    }
</script>
