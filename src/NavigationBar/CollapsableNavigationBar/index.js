export default {
    install(Vue) {
        require('bootstrap/js/src/collapse')
        Vue.component('collapsable-navigation-bar', () => import('./Component.vue'))
    }
}