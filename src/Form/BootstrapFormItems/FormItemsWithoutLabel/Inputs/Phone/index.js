export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Phone/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-phone-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Phone/Component.vue'
        );
    }
}