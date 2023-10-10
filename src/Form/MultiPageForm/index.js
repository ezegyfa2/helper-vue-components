export default {
    install(Vue) {
        require('../Form').default.install(Vue)
        require('helper-vue-components/CsrfInput').default.install(Vue)

        Vue.component('multi-page-form', () => import('./Component.vue'))
    }
}