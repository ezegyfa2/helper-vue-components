export default {
    install(Vue) {
        Vue.component('message-box', () => import('./Component.vue'))
    }
}