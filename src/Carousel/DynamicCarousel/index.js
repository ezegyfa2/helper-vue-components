export default {
    install(Vue) {
        Vue.component('dynamic-carousel', () => import('./Component.vue'))
    }
}