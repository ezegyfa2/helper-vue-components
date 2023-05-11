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
            edit_icon_link_type: {
                type: String,
                default: 'edit_icon_link'
            },
            delete_icon_link_type: {
                type: String,
                default: 'delete_icon_link'
            },
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
                return this.column_names.map((columnName) => {
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
                            if (filterSection.type.indexOf(this.filter_form_item_type_prefix) != 0) {
                                filterSection.type = this.filter_form_item_type_prefix + '-' + filterSection.type
                            }
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
                    this.$emit('update:filter_sections', this.filter_sections)
                }
            },
            filterToValueUpdated(filterSection, newValue) {
                filterSection.data.to_value = newValue
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('update:filter_sections', this.filter_sections)
                }
            },
            filterFromValueUpdated(filterSection, newValue) {
                filterSection.data.from_value = newValue
                if (newValue !== null && typeof newValue !== 'undefined') {
                    this.$emit('update:filter_sections', this.filter_sections)
                }
            },
            filterOptionsUpdated(filterSection, newValue) {
                filterSection.data.options = newValue
                console.log('options')
                if (newValue !== null && typeof newValue !== 'undefined') {
                    console.log(this.filter_sections)
                    this.$emit('update:filter_sections', this.filter_sections)
                }
            },
            shortStringFromColumn(text, maxLength) {
                if(typeof text === 'string') {
                    return shortString(text, maxLength)
                } else {
                    return text
                }
            }
        }
    }
</script>
