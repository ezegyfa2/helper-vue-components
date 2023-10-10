export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-without-label-email-input', () => import('./Component.vue'));
    }
}