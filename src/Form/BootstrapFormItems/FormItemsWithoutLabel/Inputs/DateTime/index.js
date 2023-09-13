export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/DateTime/Component.vue').install(Vue)
        require('helper-vue-components/bootstrapPackage').require.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-datetime-input',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/DateTime/Component.vue'
        );
    }
}