export default {
    install(Vue) {
        registerVueComponent(
            'page',
            require('./Component.vue').default,
            Vue
        )
    }
}