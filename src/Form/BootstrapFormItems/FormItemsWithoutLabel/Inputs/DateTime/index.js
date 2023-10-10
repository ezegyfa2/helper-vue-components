export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/DateTime').default.install(Vue)
        require('../../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-datetime-input', () => import('./Component.vue'));
    }
}