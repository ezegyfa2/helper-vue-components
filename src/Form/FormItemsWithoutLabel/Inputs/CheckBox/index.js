export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-without-label-checkbox-input', () => import('./Component.vue'));
    }
}