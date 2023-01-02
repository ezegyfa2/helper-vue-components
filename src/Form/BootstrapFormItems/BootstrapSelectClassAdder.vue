<script>
    import ClassAdder from './../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder,
        ],
        data() {
            return {
                addedClasses: {
                    'root': 'form-group',
                    'select': 'selectpicker'
                }
            }
        }
    }
</script>
