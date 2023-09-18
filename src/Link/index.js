export default {
    install(Vue) {
        registerVueComponent(
            'vue-link',
            require('./Component.vue').default,
            Vue
        )
    }
}