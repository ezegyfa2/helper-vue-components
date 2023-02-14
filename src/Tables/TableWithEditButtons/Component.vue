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
                filterSections: [],
                dataTransmits: {
                    filterFormItemTypePrefix: 'filter_form_item_type_prefix',
                    filterSections: 'filter_sections'
                }
            }
        },
        methods: {
            editUrl(id) {
                return window.location.origin + window.location.pathname + '/edit/' + id
            },
            deleteUrl(id) {
                return window.location.origin + window.location.pathname + '/' + id
            },
            filterValueUpdated(filterSection, newValue) {
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('filterRefreshed')
                }
                filterSection.data.value = newValue
            },
            filterToValueUpdated(filterSection, newValue) {
                console.log('filterToValue ' + newValue)
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('filterRefreshed')
                }
                filterSection.data.to_value = newValue
            },
            filterFromValueUpdated(filterSection, newValue) {
                console.log('filterFromValue ' + newValue)
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('filterRefreshed')
                }
                filterSection.data.from_value = newValue
            }
        },
        computed: {
            convertedColumnNames() {
                return this.column_names.map(function(columnName) {
                    return columnName.toUppercaseFirstLetter().replace('_id', '').replace('_', ' ')
                })
            }
        },
        watch: {
            filterSections: {
                immediate: true,
                handler(newFilterSections) {
                    if (newFilterSections) {
                        newFilterSections.forEach((filterSection) => {
                            filterSection.type = this.filterFormItemTypePrefix + '-' + filterSection.type
                        })
                    }
                }
            },
        }
    }
</script>
