export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Textarea/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-textarea',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Textarea/Component.vue'
        );
    }
}