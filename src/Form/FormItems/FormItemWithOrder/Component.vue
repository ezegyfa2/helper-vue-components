<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            label: {
                type: String
            },
            validation_errors: {
                type: Array
            },
            form_item_id: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                isActive: false,
            };
        },
        computed: {
            formItemId() {
                if (this.form_item_id == "") {
                    return "form_item_" + this._uid
                }
                else {
                    return this.form_item_id
                }
            }
        },
        methods: {
            changeOrder() {
                this.isActive = !this.isActive;
            },
        }
    }
</script>
