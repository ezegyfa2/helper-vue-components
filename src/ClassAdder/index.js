export default {
    install(Vue) {
        if (!window.originalMergeStrategy) {
            window.originalMergeStrategy = Vue.config.optionMergeStrategies.data;
            Vue.config.optionMergeStrategies.data = function strategy(
                toVal,
                fromVal,
                vm
            ) {
                if (
                    toVal &&
                    typeof toVal === 'function' &&
                    fromVal &&
                    typeof fromVal === 'function'
                ) {
                    try {
                        // Test parameters
                        toVal()
                        fromVal()
                        
                        return () => {
                            let originalData = toVal()
                            let newData = fromVal()
                            let mergedData = window.originalMergeStrategy(toVal, fromVal, vm)
                            let data = mergedData()
                            if ('addedClasses' in originalData && 'addedClasses' in newData) {
                                data.addedClasses = mergeComponentClasses([
                                    originalData.addedClasses,
                                    newData.addedClasses,
                                ]);
                            }
                            return data;
                        }
                    }
                    catch (error) {
                        return window.originalMergeStrategy(toVal, fromVal, vm)
                    }
                } else {
                    return window.originalMergeStrategy(toVal, fromVal, vm);
                }
            }
        }
    }
}