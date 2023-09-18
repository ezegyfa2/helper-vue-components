export default {
    install(Vue) {
        require('../../../../FormItems/Inputs/CheckBox').default.install(Vue)
        require('helper-vue-components/ClassAdder').default.install(Vue)

        registerVueComponent(
            'bootstrap-checkbox-input',
            require('./Component.vue').default,
            Vue
        );
    }
}