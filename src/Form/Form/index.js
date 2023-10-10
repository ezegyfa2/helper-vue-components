export default {
    install(Vue) {
        Vue.component('vue-form', () => import('./Component.vue'))
    }
}