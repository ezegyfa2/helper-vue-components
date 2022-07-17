<script>
    export default {
        props: {
            url: {
                type: String
            },
            method: {
                type: String,
                default: "post"
            },
            button_title: {
                type: String
            }
        },
        data() {
            return {
                submitted: false
            }
        },
        methods: {
            submitForm (e) {
                this.submitted = true
                return true
            }
        }
    }
</script>
