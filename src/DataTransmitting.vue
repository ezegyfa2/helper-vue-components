<script>
    import DeepWatcherMethods from './DeepWatcherMethods.vue'

    export default {
        mixins: [
            DeepWatcherMethods
        ],
        data() {
            return {
                dataTransmits: {}
            }
        },
        mounted() {
            for (const [dataName, propertyName] of Object.entries(this.dataTransmits)) {
                this.changeDataValue(dataName, this[propertyName])
                this.initDeepWatcher(propertyName, (newValue, oldValue) => {
                    if (self[dataName] !== newValue) {
                        this.changeDataValue(dataName, newValue)
                    }
                })
            }
        }
    }
</script>
