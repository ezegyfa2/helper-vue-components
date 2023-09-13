export default {
    install(Vue) {
        require('helper-vue-components/bootstrap-package').install(Vue)

        registerVueComponent(
            'vue-form',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/Form/Form/Component.vue'
        )
    }
}