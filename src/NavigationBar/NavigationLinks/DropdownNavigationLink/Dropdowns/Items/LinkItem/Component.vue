<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            url: {
                type: String
            },
            icon_class: {
                type: String
            },
            content: {
                type: String
            }
        }
    }
</script>
