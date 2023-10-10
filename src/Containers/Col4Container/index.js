export default {
    install(Vue) {
        Vue.component('col4-container', () => import('./Component.vue'))
    }
}