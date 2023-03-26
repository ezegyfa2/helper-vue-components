<script>
    export default {
        methods: {
            //Only work with reference to property to change
            refreshDeepData(propertyToChange, deepPropertyName, deepPropertyValue) {
                if (propertyToChange && propertyToChange.data) {
                    propertyToChange.data[deepPropertyName] = deepPropertyValue
                }
            },
            initDeepWatcher(watcherName, handler) {
                let self = this
                this.$watch(watcherName, (newValue, oldValue) => {
                    if (typeof newValue !== 'undefined') {
                        handler(newValue, oldValue)
                    }
                    //self.$forceUpdate()
                }, {
                    immediate: true,
                    deep: true,
                    flush: 'sync'
                })
            }
        }
    }
</script>
