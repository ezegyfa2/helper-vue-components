<script>
    export default {
        methods: {
            //Only work with reference to property to change
            changeDeepData(propertyToChange, deepPropertyName, deepPropertyValue) {
                console.log(propertyToChange)
                console.log(deepPropertyName)
                console.log(deepPropertyValue)
                if (propertyToChange && propertyToChange.data) {
                    propertyToChange.data[deepPropertyName] = deepPropertyValue
                }
                console.log('asd')
            },
            initDeepWatcher(watcherName, handler) {
                let self = this
                this.$watch(watcherName, function(newValue, oldValue) {
                    if (typeof newValue !== 'undefined') {
                        handler(newValue, oldValue)
                    }
                    //self.$forceUpdate()
                }, {
                    immediate: true,
                    deep: true,
                    flush: 'sync'
                })
            },
            refreshDataValue(subObjectName) {
                this.changeDataValue(subObjectName, this[subObjectName])
            },
            changeDataValue(dataName, newValue) {
                if (this.$options.propsData[dataName]) {
                    this.$emit('update:' + dataName, newValue)
                }
                else {
                    this[dataName] = Object.assign({}, newValue)
                }
            }
        }
    }
</script>
