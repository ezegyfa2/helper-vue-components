export default {
    install(Vue) {
        require('../../../FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)
        require('../../FormItemWithLabel').default.install(Vue)

        Vue.component('form-item-checkbox-input', () => import('./Component.vue'));
    }
}