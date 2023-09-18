export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'list-dropdown',
            require('./Component.vue').default,
            Vue
        )
    }
}
