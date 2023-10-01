export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}