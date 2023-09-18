export default {
    install(Vue) {
        require('helper-vue-components/ReactiveProperties/ComponentSize').default.install(Vue)
        require('helper-vue-components/ReactiveProperties/WindowSize').default.install(Vue)

        registerVueComponent(
            'vue-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}