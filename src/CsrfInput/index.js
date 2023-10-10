export default {
    install(Vue) {
        require('js-helper-methods/helperMethods')

        Vue.component('csrf-input', () => import('./Component.vue'))
    }
}