export default {
    install(Vue) {
        Vue.component('vue-table', () => import('./Component.vue'))
    }
}