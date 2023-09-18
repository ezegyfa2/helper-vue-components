export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Textarea').default.install(Vue)
        require('../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-textarea',
            require('./Component.vue').default,
            Vue
        );
    }
}