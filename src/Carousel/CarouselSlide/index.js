import { BCarouselSlide } from 'bootstrap-vue'

export default {
    install(Vue) {
        Vue.component('b-carousel-slide', BCarouselSlide)

        registerVueComponent(
            'carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}