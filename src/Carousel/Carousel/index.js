export default {
    install(Vue) {
        require('../DynamicCarousel').default.install(Vue)

        registerVueComponent(
            'carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}
