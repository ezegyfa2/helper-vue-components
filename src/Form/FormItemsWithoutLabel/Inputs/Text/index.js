export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-without-label-text-input', () => import('./Component.vue'));
    }
}