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
        },
        data() {
            return {
                width: null
            }
        },
        mounted() {
            this.width = this.$el.offsetWidth
        },
        computed: {
            srcWithSize() {
                if (this.src && this.width) {
                    return 'get-image?path=' + this.src + '&width=' + this.width
                }
                else {
                    return ''
                }
            }
        }
    }
</script>
