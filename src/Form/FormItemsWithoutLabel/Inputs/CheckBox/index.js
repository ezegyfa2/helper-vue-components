export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-without-label-checkbox-input',
            require('./Component.vue').default,
            Vue
        );
    }
}