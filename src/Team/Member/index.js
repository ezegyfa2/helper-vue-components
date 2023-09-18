export default {
    install(Vue) {
        registerVueComponent(
            'team-member',
            require('./Component.vue').default,
            Vue
        )
    }
}