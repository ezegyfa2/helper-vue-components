<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title_section: {
                type: Object
            },
            member_sections: {
                type: Array
            },
            footer_text: {
                type: String
            }
        }
    }
</script>
