export default {
    install(Vue) {
        require('../../FormItemsWithoutLabel/FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-with-label', () => import('./Component.vue'));
    }
}