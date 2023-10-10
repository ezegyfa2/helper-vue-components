export default {
    install(Vue) {
        require('js-helper-methods/facebookMethods')

        Vue.component('page-with-facebook-events', () => import('./Component.vue'))
    }
}