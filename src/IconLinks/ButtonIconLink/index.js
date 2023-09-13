export default {
    install(Vue) {
        require('../IconLink').install(Vue)
        require('helper-vue-components/bootstrap-package')

        registerVueComponent(
            'button-icon-link',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/IconLinks/ButtonIconLink/Component.vue'
        )
    }
}