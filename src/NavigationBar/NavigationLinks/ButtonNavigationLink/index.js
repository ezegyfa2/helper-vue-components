export default {
    install(Vue) {
        registerVueComponent(
            'button-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}