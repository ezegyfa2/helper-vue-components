export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Email').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-email-input', () => import('./Component.vue'));
    }
}