export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-checkbox-input', () => import('./Component.vue'))
    }
}