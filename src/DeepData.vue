<script>
    import DeepWatcherMethods from './DeepWatcherMethods.vue'

    export default {
        mixins: [
            DeepWatcherMethods
        ],
        data() {
            return {
                deepProperties: {}
            }
        },
        mounted() {
            let self = this
            for (const [deepPropertyName, subDataNames] of Object.entries(this.deepProperties)) {
                //subDataNames.forEach((subDataName) => { 
                for (const [subObjectName, subObjectPropertyName] of Object.entries(self.getSubDataNamesObject(subDataNames, deepPropertyName))) {
                    self.initDeepWatcher(subObjectName, (newSubObjectValue) =>  {
                        if (Array.isArray(newSubObjectValue)) {
                            let subDataArray = self[subObjectName]
                            let hasChages = false
                            subDataArray.forEach((subData) => {
                                if (subData && subData.data && subData.data[subObjectPropertyName] != self[deepPropertyName]) {
                                    self.refreshDeepData(subData, subObjectPropertyName, self[deepPropertyName])
                                    hasChages = true
                                }
                            })
                            if (hasChages) {
                                self[subObjectName] = JSON.parse(JSON.stringify(subDataArray))
                            }
                        }
                        else {
                            if (newSubObjectValue && newSubObjectValue.data && newSubObjectValue.data[subObjectPropertyName] != self[deepPropertyName]) {
                                self.refreshDeepData(self[subObjectName], subObjectPropertyName, self[deepPropertyName])
                                self[subObjectName] = Object.assign({}, self[subObjectName])
                            }
                        }
                    })
                }
                self.initDeepWatcher(deepPropertyName, (newDeepPropertyValue) => {
                    //subDataNames.forEach((subDataName) => {
                    for (const [subObjectName, subObjectPropertyName] of Object.entries(self.getSubDataNamesObject(subDataNames, deepPropertyName))) {
                        if (Array.isArray(self[subObjectName])) {
                            let subDataArray = self[subObjectName]
                            let hasChages = false
                            subDataArray.forEach((subData) => {
                                if (subData && subData.data && subData.data[subObjectPropertyName] != self[deepPropertyName]) {
                                    self.refreshDeepData(subData, subObjectPropertyName, newDeepPropertyValue)
                                    hasChages = true
                                }
                            })
                            if (hasChages) {
                                self[subObjectName] = JSON.parse(JSON.stringify(subDataArray))
                            }
                            //self.refreshNavigationLinkSectionsToggle(self.navigation_link_group_sections, newDeepPropertyValue)
                        }
                        else {
                            if (self[subObjectName] && self[subObjectName].data && self[subObjectName].data[subObjectPropertyName] != self[deepPropertyName]) {
                                self.refreshDeepData(self[subObjectName], subObjectPropertyName, newDeepPropertyValue)
                                self[subObjectName] = Object.assign({}, self[subObjectName])
                            }
                        }
                    }
                })
            }
        },
        methods: {
            getSubDataNamesObject(subDataNames, deepPropertyName) {
                if (Array.isArray(subDataNames)) {
                    let subDataNamesObject = {}
                    subDataNames.forEach((subDataName) => {
                        subDataNamesObject[subDataName] = deepPropertyName
                    })
                    return subDataNamesObject
                }
                else {
                    return subDataNames
                }
            }
        }
    }
</script>
