export default {
    install(Vue) {
        Vue.component('timeline-item', () => import('./Component.vue'))
    }
}