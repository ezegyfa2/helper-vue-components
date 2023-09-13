export default {
    install(Vue) {
        registerVueComponent(
            'form-item-without-label-select',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/FormItemsWithoutLabel/Select/Component.vue'
        );
    }
}