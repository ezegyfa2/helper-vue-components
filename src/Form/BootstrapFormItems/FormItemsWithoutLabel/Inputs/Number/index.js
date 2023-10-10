export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-number-input', () => import('./Component.vue'));
    }
}