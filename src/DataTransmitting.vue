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
                this[dataName] = this[propertyName]
                let self = this
                this.initDeepWatcher(propertyName, function(newValue, oldValue) {
                    if (self[dataName] !== newValue) {
                        self[dataName] = newValue
                    }
                })
            }
        }
    }
</script>
