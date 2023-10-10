export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Textarea').default.install(Vue)
        require('../../BootstrapClassAdder').default.install(Vue)

        Vue.component('bootstrap-without-label-textarea', () => import('./Component.vue'));
    }
}