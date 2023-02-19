<script>
    import ClassAdder from '../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            toggled: {
                type: Boolean,
                default() {
                    return false
                }
            },
        },
        computed: {
            toggledClass() {
                if (this.isToggled) {
                    return 'toggled'
                }
                else {
                    return ''
                }
            }
        },
        watch: {
            toggled: {
                immediate: true,
                handler(newToggled) {
                    if (newToggled) {
                        this.addClass('root', 'toggled')
                    }
                    else {
                        this.removeClass('root', 'toggled')
                    }
                },
                flush: 'sync'
            }
        }
    }
</script>
