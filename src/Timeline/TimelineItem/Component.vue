<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            image_url: {
                type: String
            },
            image_alt: {
                type: String,
                default() {
                    return ''
                }
            },
            content_sections: {
                type: Array
            },
            date_interval: {
                type: String
            },
            is_inverted: {
                type: Boolean,
                default() {
                    return false
                }
            },
            with_line: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {
                imageWidths: [
                    30,
                    39,
                    47,
                    102,
                    127,
                    187,
                    352,
                ]
            }
        },
        computed: {
            leftContentClass() {
                if (this.is_inverted) {
                    return 'empty-space'
                }
                else {
                    return ''
                }
            },
            rightContentClass() {
                if (this.is_inverted) {
                    return ''
                }
                else {
                    return 'empty-space'
                }
            }
        }
    }
</script>
