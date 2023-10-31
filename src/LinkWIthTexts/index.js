export default {
    install(Vue) {
        Vue.component('vue-link', () => import('./Component.vue'))
    }
}