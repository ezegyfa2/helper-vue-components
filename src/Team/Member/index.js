export default {
    install(Vue) {
        Vue.component('team-member', () => import('./Component.vue'))
    }
}