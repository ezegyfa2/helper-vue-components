export default {
    install(Vue) {
        Vue.component('timeline', () => import('./Component.vue'))
    }
}