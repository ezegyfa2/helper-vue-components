<script>
    import IconLink from './../IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        data() {
            return {
                addedClasses: {
                    root: [
                        'mx-2',
                        'btn',
                        'btn-dark',
                        'btn-social'
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
