export default {
    install(Vue) {
        registerVueComponent(
            'col4-container',
            require('./Component.vue').default,
            Vue
        )
    }
}