<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            with_footer: {
                type: Boolean,
                default: false
            },
            column_names: {
                type: Array
            },
            rows: {
                type: Array
            }
        },
        methods: {
            editUrl(id) {
                return window.location.origin + window.location.pathname + '/edit/' + id
            },
            deleteUrl(id) {
                return window.location.origin + window.location.pathname + '/' + id
            }
        },
        computed: {
            convertedColumnNames() {
                return this.column_names.map(function(columnName) {
                    return columnName.toUppercaseFirstLetter().replace('_id', '').replace('_', ' ')
                })
            }
        }
    }
</script>
