export default {
    install(Vue) {
        registerVueComponent(
            'brand-image',
            require('./Component.vue').default,
            Vue
        );
    }
}