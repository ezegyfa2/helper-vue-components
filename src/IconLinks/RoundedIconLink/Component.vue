<script>
     import IconLink from './../IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        data() {
            return {
                addedClasses: {
                    root: 'mx-2'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
