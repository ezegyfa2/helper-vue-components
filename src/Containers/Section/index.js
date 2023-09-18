export default {
    install(Vue) {
        registerVueComponent(
            'section-container',
            require('./Component.vue').default,
            Vue
        )
    }
}