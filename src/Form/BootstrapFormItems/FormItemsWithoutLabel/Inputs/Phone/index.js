export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Phone').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-phone-input',
            require('./Component.vue').default,
            Vue
        );
    }
}