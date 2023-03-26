<script>
    import DeepData from '../../../../../helper-vue-components/src/DeepData.vue'
    import DataTransmitting from '../../../../../helper-vue-components/src/DataTransmitting.vue'

    export default {
        mixins: [
            DeepData,
            DataTransmitting,
        ],
        props: {
            dropdown_section: {
                type: Object
            }
        },
        data() {
            return {
                deepProperties: {
                    'dropdownLinkId': {
                        'dropdown_section': 'dropdown_link_id'
                    }
                }
            }
        },
        computed: {
            dropdownLinkId() {
                return "dropdown" + this._uid
            }
        }
    }
</script>
