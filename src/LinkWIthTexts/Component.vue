<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            start_content: {
                type: String,
                default: ''
            },
            url: {
                type: String
            },
            content: {
                type: String
            },
            end_content: {
                type: String,
                default: ''
            }
        }
    }
</script>
