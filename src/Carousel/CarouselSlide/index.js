import { BCarouselSlide } from 'bootstrap-vue'

export default {
    install(Vue) {
        Vue.component('b-carousel-slide', BCarouselSlide)

        Vue.component('carousel-slide', () => import('./Component.vue'))
    }
}