export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-without-label-text-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Text/Component.vue'
        );
    }
}