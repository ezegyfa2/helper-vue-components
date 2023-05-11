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
            },
            order: {
                type: String,
                default: 'none'
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
        watch: {
            order: {
                immediate: true,
                handler(newOrder) {
                    this.$emit('update:order', newOrder)
                },
                flush: 'sync'
            },
        },
        methods: {
            changeAscOrderBy() {
                if (this.order == 'asc') {
                    this.order = 'none'
                }
                else {
                    this.order = 'asc'
                }
            },
            changeDescOrderBy() {
                if (this.order == 'desc') {
                    this.order = 'none'
                }
                else {
                    this.order = 'desc'
                }
            }
        }
    }
</script>
