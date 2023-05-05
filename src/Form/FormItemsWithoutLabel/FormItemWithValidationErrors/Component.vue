<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            validation_errors: {
                type: Array
            },
            saved_template_names: {
                type: Array
            }
        },
        computed: {
            invalidClass() {
                if (this.validation_errors && this.validation_errors.length > 0) {
                    return 'is-invalid'
                }
                else {
                    return null
                }
            }
        }
    }
</script>
