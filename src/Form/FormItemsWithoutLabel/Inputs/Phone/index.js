export default {
    install(Vue) {
        registerVueComponent(
            'form-item-without-label-phone-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Phone/Component.vue'
        );
    }
}