export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-component',
            require('./Component.vue').default,
            Vue
        )
    }
}