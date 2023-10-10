export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-without-label-phone-input', () => import('./Component.vue'));
    }
}