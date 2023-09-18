export default {
    install(Vue) {
        registerVueComponent(
            'timeline-item',
            require('./Component.vue').default,
            Vue
        )
    }
}