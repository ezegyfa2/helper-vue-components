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
                        root: [
                            'mx-2',
                            'btn',
                            'btn-light',
                            'btn-social'
                        ]
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
