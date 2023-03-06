<script>
    export default {
        mounted() {
            this.initToggler()
        },
        updated() {
            this.$nextTick(function () {
                this.initToggler()
            })
        },
        methods: {
            initToggler() {
                if (!this.isToggleEventRegistered()) {
                    $(this.$refs.toggler).on('click', this.toggle)
                }
            },
            toggle() {
                //$("body").toggleClass("sidebar-toggled")
                console.log('toggling')
                this.$emit('toggled', !this.toggled)
                //$(this.$refs.sidebar).toggleClass("toggled")
            },
            isToggleEventRegistered() {
                let registeredEventsOnToggler = jQuery._data($(this.$refs.toggler)[0], "events")
                if (registeredEventsOnToggler && 'click' in registeredEventsOnToggler) {
                    let self = this
                    let registeredToggleEvents = registeredEventsOnToggler.click.filter(function (event) {
                        return event.origType == 'click' && event.handler == self.toggle
                    })
                    return registeredToggleEvents.length > 0
                }
                else {
                    return false
                }
            }
        }
    }
</script>
