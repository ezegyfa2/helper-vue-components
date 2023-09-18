export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-without-label-email-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Email/Component.vue'
        );
    }
}