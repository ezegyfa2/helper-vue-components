export default {
    install(Vue) {
        registerVueComponent(
            'dropdown-link-item',
            require('./Component.vue').default,
            Vue
        )
    }
}