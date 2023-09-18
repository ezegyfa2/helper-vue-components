export default {
    install(Vue) {
        registerVueComponent(
            'right-content',
            require('./Component.vue').default,
            Vue
        )
    }
}