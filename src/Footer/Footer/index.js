export default {
    install(Vue) {
        registerVueComponent(
            'vue-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}