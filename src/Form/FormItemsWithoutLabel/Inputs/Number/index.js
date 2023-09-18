export default {
    install(Vue) {
        require('../../FormItemWithValidationErrors').default.install(Vue)

        registerVueComponent(
            'form-item-without-label-number-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Number/Component.vue'
        );
    }
}