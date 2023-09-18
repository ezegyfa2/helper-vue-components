export default {
    install(Vue) {
        require('../IconLink').default.install(Vue)

        registerVueComponent(
            'button-icon-link',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/ButtonIconLink/Component.vue'
        )
    }
}