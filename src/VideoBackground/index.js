export default {
    install(Vue) {
        Vue.component('video-background', () => import('./Component.vue'))
    }
}