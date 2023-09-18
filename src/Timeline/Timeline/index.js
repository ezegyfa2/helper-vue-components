export default {
    install(Vue) {
        registerVueComponent(
            'timeline',
            require('./Component.vue').default,
            Vue
        )
    }
}