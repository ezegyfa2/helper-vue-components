<script>
    import CheckBoxInput from './../../../../FormItems/Inputs/CheckBox/Component.vue'
    import ClassAdder from './../../../../../ClassAdder.vue'

    export default {
        mixins: [
            CheckBoxInput,
            ClassAdder,
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.form-item-control': 'form-control'
                    }
                }
            }
        }

    }
</script>
