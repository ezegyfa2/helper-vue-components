<script>
     import IconLink from './../IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        root: 'mx-2'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
