export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'roadmap',
            require('./Component.vue').default,
            Vue
        )
    }
}