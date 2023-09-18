export default {
    install(Vue) {
        require('../Form').default.install(Vue)
        require('helper-vue-components/CsrfInput').default.install(Vue)

        registerVueComponent(
            'multi-page-form',
            require('./Component.vue').default,
            Vue
        )
    }
}