<script>
    import IconLink from './../IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        props: {
            icon_class: {
                type: String,
                default: 'fas fa-pen'
            }
        },
        data() {
            return {
                addedClasses: {
                    root: [
                        'mx-2',
                        'btn'
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
