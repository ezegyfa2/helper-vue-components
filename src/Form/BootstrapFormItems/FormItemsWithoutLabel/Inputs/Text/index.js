export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-text-input',
            require('./Component.vue').default,
            Vue
        );
    }
}