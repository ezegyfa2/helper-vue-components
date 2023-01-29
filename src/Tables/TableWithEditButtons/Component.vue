<template lang="pug">
    include Template.pug
</template>

<script>
    import DataTransmitting from '../../DataTransmitting.vue'

    export default {
        mixins: [
            DataTransmitting,
        ],
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
            },
            filter_sections: {
                type: Array
            },
            filter_form_item_type_prefix: {
                type: String
            }
        },
        data() {
            return {
                filterFormItemTypePrefix: null,
                dataTransmits: {
                    filterFormItemTypePrefix: 'filter_form_item_type_prefix'
                }
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
            },
            convertedFilterSections() {
                return this.filter_sections.map(filterSection => {
                    return {
                        type: this.filterFormItemTypePrefix + '-' + filterSection.type,
                        data: filterSection.data
                    }
                })
            }
        }
    }
</script>
