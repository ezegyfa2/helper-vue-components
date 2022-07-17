<template>
    <a>asd</a>
</template>

<script>
    import Parent from './Parent.vue'

    export default {
        mixins: [
            Parent
        ],
        props: {
            
        },
        data() {
            return {
                data1: 1
            }
        },
        mounted() {
            this.data1 = 3
        },
        watch: {
            data1: {
                immediate: true,
                handler(newData1) {
                    this['data1'] = Object.assign({}, newData1)
                }
            }
        }
    }
</script>
