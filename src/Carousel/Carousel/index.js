export default {
    install(Vue) {
        require('../DynamicCarousel').default.install(Vue)

        Vue.component('carousel', () => import('./Component.vue'))
    }
}
