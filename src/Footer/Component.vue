<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            icon_links_section: {
                type: Object
            },
            footer_link_sections: {
                type: Array
            },
            copyright: {
                type: Object
            }
        }
    }
</script>
