export default {
    install(Vue) {
        require('../../../FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)
        require('../../FormItemWithLabel').default.install(Vue)

        registerVueComponent(
            'form-item-checkbox-input',
            require('./Component.vue').default,
            Vue
        );
    }
}