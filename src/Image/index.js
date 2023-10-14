export default {
    install(Vue) {
        Vue.component('vue-image', () => import('./Component.vue'))
    }
}