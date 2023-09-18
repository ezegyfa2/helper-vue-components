export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/DateTime').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-datetime-input',
            require('./Component.vue').default,
            Vue
        );
    }
}