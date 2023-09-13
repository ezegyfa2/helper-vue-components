export default {
    install(Vue) {
        require('../IconLink').default.install(Vue)

        registerVueComponent(
            'button-icon-link2',
            require('./Component.vue').default,
            Vue
        )
    }
}