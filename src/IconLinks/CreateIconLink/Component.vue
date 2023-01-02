<script>
    import IconLink from '../IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        data() {
            return {
                addedClasses: {
                    root: [
                        'btn',
                        'btn-success'
                    ]
                }
            }
        }
    }
</script>
