export default {
    install(Vue) {
        require('../FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-without-label-textarea',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/TextArea/Component.vue'
        );
    }
}