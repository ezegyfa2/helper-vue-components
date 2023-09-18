export default {
    install(Vue) {
        registerVueComponent(
            'form-item-radio',
            require('./Component.vue').default,
            Vue
        );
    }
}