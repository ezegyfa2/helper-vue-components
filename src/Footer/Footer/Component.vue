<template lang="pug">
    include Template.pug
</template>

<script>
    import ReactiveComponentSize from 'helper-vue-components/ReactiveProperties/ComponentSize/Component.vue'
    import ReactiveWindowSize from 'helper-vue-components/ReactiveProperties/WindowSize/Component.vue'

    export default {
        mixins: [
            ReactiveComponentSize,
            ReactiveWindowSize,
        ],
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
        },
        computed: {
            fixedClass() {
                if (this.bottomPosition < this.windowSize.height) {
                    return 'fixed'
                }
                else {
                    return ''
                }
            }
        }
    }
</script>
