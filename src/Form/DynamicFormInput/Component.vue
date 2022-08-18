<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String
            },
            name: {
                type: String
            },
            required: {
                type: Boolean
            },
            type: {
                type: String
            },
            value_type: {
                type: String
            },
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            default: {},
            options: {
                type: Array
            },
            tag_types: {
                type: Object
            }
        },
        computed: {
            inputComponentInfos() {
                return {
                    type: this.tag_types[this.type],
                    data: {
                        placeholder: this.placeholder,
                        name: this.name,
                        required: this.required,
                        type: this.type,
                        value_type: this.value_type,
                        min: this.min,
                        max: this.max,
                        default: this.default,
                        options: this.options,
                    }
                }
            }
        }
    }
</script>
