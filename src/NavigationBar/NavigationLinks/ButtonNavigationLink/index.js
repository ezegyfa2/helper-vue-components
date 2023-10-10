export default {
    install(Vue) {
        Vue.component('button-navigation-link', () => import('./Component.vue'))
    }
}