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
                this.$watch(watcherName, function(newValue) {
                    handler(newValue)
                    self.$forceUpdate()
                }, {
                    immediate: true,
                    deep: true
                })
            }
        }
    }
</script>
