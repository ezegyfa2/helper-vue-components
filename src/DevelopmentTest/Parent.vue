<template>
    <child :prop1="data2">
</template>

<script>
    import GrandParent from './GrandParent.vue'

    export default {
        mixins: [
            GrandParent
        ],
        data() {
            return {
                data2: 1
            }
        },
        mounted() {
            this.data2 = 2
        }
    }
</script>
