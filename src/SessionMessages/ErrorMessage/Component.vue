<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                iconClass: 'fa fa-times'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>