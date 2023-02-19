<template>
    <a>asd</a>
</template>

<script>
    //import Parent from './Parent.vue'

    export default {
        //mixins: [
        //    Parent
        //],
        props: {
            prop1: {
                type: String
            }
        },
        data() {
            return {
                data1: 1
            }
        },
        watch: {
            data1: {
                handler(newData1) {
                    this.$emit('update:prop1', newData1)
                },
                flush: 'sync'
            }
        }
    }
</script>
