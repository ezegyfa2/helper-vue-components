export default {
    install(Vue) {
        Vue.component('form-item-with-validation-errors', () => import('./Component.vue'));
    }
}