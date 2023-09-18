import { BCarouselSlide } from 'bootstrap-vue'

export default {
    install(Vue) {
        Vue.component('b-carousel-slide', BCarouselSlide)

        registerVueComponent(
            'vue-dynamic-zoom-carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}