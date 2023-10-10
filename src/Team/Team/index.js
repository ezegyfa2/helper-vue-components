export default {
    install(Vue) {
        Vue.component('team', () => import('./Component.vue'))
    }
}