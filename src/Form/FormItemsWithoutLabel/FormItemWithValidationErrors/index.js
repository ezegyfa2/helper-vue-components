export default {
    install(Vue) {
        registerVueComponent(
            'form-item-with-validation-errors',
            require('./Component.vue').default,
            Vue
        );
    }
}