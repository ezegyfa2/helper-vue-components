<script>
    export default {
        data() {
            return {
                currentValueChanges: {}
            }
        },
        methods: {
            addCurrentValueChange(newValue, variableName) {
                if (!this.currentValueChanges[variableName]) {
                    this.currentValueChanges[variableName] = []
                }
                this.currentValueChanges[variableName].push({
                    value: newValue,
                    time: Date.now()
                })
            },
            updateCurrentValueChanges() {
                let currentTime = Date.now()
                for (let variableName in this.currentValueChanges) {
                    while (this.currentValueChanges[variableName].length > 0 && currentTime - this.currentValueChanges[variableName][0].time > 10000) {
                        this.currentValueChanges[variableName] = this.currentValueChanges[variableName].slice(1)
                    }
                }
            },
            isCurrentValueChange(valueToCheck, variableName) {
                if (this.currentValueChanges[variableName]) {
                    for (let currentValueChange of this.currentValueChanges[variableName]) {
                        if (currentValueChange.value == valueToCheck) {
                            return true
                        }
                    }
                    return false
                }
                else {
                    return false
                }
            }
        }
    }
</script>
