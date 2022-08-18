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
            }
        }
    }
</script>
