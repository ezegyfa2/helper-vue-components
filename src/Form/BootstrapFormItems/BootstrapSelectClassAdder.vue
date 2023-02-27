<script>
    import ClassAdder from './../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder,
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        'root': 'form-group',
                        'select': 'selectpicker'
                    }
                }
            }
        }
    }
</script>
