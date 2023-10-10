export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-text-input', () => import('./Component.vue'));
    }
}