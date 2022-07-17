<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            navbar_section: {
                type: Object
            },
            header_section: {
                type: Object
            },
            content_sections: {
                type: Array
            },
            contact_section: {
                type: Object
            },
            footer_section: {
                type: Object
            }
        }
    }
</script>
