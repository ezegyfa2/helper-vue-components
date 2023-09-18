export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-number-input',
            require('./Component.vue').default,
            Vue
        );
    }
}