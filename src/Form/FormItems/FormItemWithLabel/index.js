export default {
    install(Vue) {
        require('../../FormItemsWithoutLabel/FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-with-label',
            require('./Component.vue').default,
            Vue
        );
    }
}