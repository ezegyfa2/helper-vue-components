export default {
    install(Vue) {
        Vue.component('right-content', () => import('./Component.vue'))
    }
}