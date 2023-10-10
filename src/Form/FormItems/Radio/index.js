export default {
    install(Vue) {
        Vue.component('form-item-radio', () => import('./Component.vue'));
    }
}