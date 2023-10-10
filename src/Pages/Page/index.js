export default {
    install(Vue) {
        Vue.component('page', () => import('./Component.vue'))
    }
}