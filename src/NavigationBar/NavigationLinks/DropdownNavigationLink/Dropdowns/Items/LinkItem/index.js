export default {
    install(Vue) {
        Vue.component('dropdown-link-item', () => import('./Component.vue'))
    }
}