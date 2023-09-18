import { BCarousel } from 'bootstrap-vue'

export default {
    install(Vue) {
        Vue.component('b-carousel', BCarousel)

        registerVueComponent(
            'carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}
