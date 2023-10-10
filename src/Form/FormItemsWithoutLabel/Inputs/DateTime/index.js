export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        Vue.component('form-item-without-label-datetime-input', () => import('./Component.vue'));
    }
}