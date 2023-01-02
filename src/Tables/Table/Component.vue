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
        }
    }
</script>
