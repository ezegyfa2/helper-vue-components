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
                        '.form-item-control': 'form-control'
                    }
                }
            }
        }
    }
</script>
