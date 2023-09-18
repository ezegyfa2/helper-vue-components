export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Select').default.install(Vue)
        require('../../BootstrapSelectClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-select',
            require('./Component.vue').default,
            Vue
        );
    }
}