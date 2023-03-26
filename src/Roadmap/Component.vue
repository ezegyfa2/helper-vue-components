<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title_section: {
                type: Object
            },
            timeline_section: {
                type: Object
            },
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.content': 'text-uppercase'
                    }
                }
            }
        }
    }
</script>
