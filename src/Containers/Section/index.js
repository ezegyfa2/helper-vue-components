export default {
    install(Vue) {
        Vue.component('section-container', () => import('./Component.vue'))
    }
}