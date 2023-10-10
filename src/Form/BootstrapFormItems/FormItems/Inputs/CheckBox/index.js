export default {
    install(Vue) {
        require('../../../../FormItems/Inputs/CheckBox').default.install(Vue)
        require('helper-vue-components/ClassAdder').default.install(Vue)

        Vue.component('bootstrap-checkbox-input', () => import('./Component.vue'));
    }
}