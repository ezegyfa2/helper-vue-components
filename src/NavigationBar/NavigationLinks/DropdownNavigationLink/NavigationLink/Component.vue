<template lang="pug">
    include Template.pug
</template>

<script>
    import DropdownNavigationLink from '../DropdownNavigationLink.vue'

    export default {
        mixins: [
            DropdownNavigationLink,
        ],
        props: {
            icon_class: {
                type: String
            },
            badge_content: {
                type: String
            }
        }
    }
</script>
