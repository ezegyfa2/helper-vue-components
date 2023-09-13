export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Select/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-select',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Select/Component.vue'
        );
    }
}