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
                type: String,
                default: 'bootstrap'
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
            filter_sections: {
                immediate: true,
                handler(newFilterSections) {
                    if (newFilterSections) {
                        newFilterSections.forEach((filterSection) => {
                            filterSection.type = this.filter_form_item_type_prefix + '-' + filterSection.type
                        })
                    }
                },
                flush: 'sync'
            },
        },
        methods: {
            editUrl(id) {
                return window.location.origin + window.location.pathname + '/edit/' + id
            },
            deleteUrl(id) {
                return window.location.origin + window.location.pathname + '/' + id
            },
            filterValueUpdated(filterSection, newValue) {
                filterSection.data.value = newValue
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('update:filter_sections')
                }
            },
            filterToValueUpdated(filterSection, newValue) {
                filterSection.data.to_value = newValue
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('update:filter_sections')
                }
            },
            filterFromValueUpdated(filterSection, newValue) {
                filterSection.data.from_value = newValue
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('update:filter_sections')
                }
            }
        }
    }
</script>
