<script>
    import IconLink from '../IconLink/Component.vue'

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
                            'btn',
                            'btn-success'
                        ]
                    }
                }
            }
        }
    }
</script>
