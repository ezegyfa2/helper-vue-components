export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}