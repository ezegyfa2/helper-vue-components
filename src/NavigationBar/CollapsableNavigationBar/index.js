export default {
    install(Vue) {
        registerVueComponent(
            'collapsable-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}