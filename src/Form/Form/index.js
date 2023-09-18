export default {
    install(Vue) {
        registerVueComponent(
            'vue-form',
            require('./Component.vue').default,
            Vue
        )
    }
}