export default {
    install(Vue) {
        Vue.component('brand-image', () => import('./Component.vue'));
    }
}