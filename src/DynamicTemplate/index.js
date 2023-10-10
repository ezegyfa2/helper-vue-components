export default {
    install(Vue) {
        require('js-helper-methods/objectMethods')

        Vue.component('dynamic-template', () => import('./Component.vue'))
    }
}