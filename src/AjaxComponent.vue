<script>
    export default {
        mounted() {
            checkObjectHasProperty(this, 'ajaxDataUrl')
            checkIsEmptyString(this.ajaxDataUrl)
            checkObjectHasProperty(this, 'refreshAjaxProperties')
            checkVariableType(this.refreshAjaxProperties, 'refreshAjaxProperties', 'function')
        },
        methods: {
            refreshAjaxData() {
                axios.get(this.ajaxDataUrl).then(this.refreshAjaxProperties)
            },
        }
    }
</script>
