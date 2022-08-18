<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            label: {
                type: String
            }
        },
        computed: {
            formItemId() {
                return "form_item_" + this._uid
            }
        }
    }
</script>
