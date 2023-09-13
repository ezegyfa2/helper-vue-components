export default {
    install(Vue) {
        registerVueComponent(
            'form-item-without-label-checkbox-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Checkbox/Component.vue'
        );
    }
}