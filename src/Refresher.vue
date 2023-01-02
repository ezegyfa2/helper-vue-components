<template>
    <b-table striped hover :items="items"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                refresherKey: 0
            }
        },
        methods: {
            refresh() {
                ++this.refresherKey
            }
        }
    }
</script>
