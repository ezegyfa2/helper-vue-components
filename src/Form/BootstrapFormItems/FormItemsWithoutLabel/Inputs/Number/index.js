export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Number/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-number-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Number/Component.vue'
        );
    }
}