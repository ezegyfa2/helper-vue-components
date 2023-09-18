export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-without-label-checkbox-input',
            require('./Component.vue').default,
            Vue
        )
    }
}