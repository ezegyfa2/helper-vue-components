export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Select').default.install(Vue)
        require('../../BootstrapSelectClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-select', () => import('./Component.vue'));
    }
}