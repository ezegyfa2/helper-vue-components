<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from '../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            content: {
                type: String
            },
            url: {
                type: String
            },
            icon_class: {
                type: String
            },
            is_submit_button: {
                type: Boolean,
                default: false
            },
            on_click: {
                designIgnored: true,
                default() {
                    return () => { console.log('click') }
                } 
            }
        },
        computed: {
            iconType() {
                if (this.is_submit_button) {
                    return 'button'
                }
                else {
                    return 'a'
                }
            }
        }
    }
</script>
