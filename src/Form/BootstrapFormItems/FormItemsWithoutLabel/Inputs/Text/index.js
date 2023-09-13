export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Text/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-text-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text/Component.vue'
        );
    }
}