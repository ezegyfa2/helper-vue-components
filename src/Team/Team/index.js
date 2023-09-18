export default {
    install(Vue) {
        registerVueComponent(
            'team',
            require('./Component.vue').default,
            Vue
        )
    }
}