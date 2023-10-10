export default {
    install(Vue) {
        Vue.component('dynamic-component', () => import('./Component.vue'))
    }
}