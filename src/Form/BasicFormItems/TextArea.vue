<script>
    import FormItemWithValue from './FormItemWithValue.vue'

    export default {
        mixins: [
            FormItemWithValue
        ],
        props: {
            minlength: {
                type: Number
            },
            maxlength: {
                type: Number
            },
        }
    }
</script>
