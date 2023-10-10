export default {
    install(Vue) {
        require('../IconLink').default.install(Vue)

        Vue.component('button-icon-link', () => import('./Component.vue'))
    }
}