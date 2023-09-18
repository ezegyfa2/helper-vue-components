<script>
    import ClassAdder from 'helper-vue-components/ClassAdder/Component.vue'

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
