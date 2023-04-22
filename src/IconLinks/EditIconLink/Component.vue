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
            },
            added_classes: {
                type: Object,
                default () {
                    return {
                        root: [
                            'mx-2',
                            'btn',
                            'btn-edit'
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
