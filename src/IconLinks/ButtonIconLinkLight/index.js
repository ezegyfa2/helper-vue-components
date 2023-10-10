export default {
    install(Vue) {
        require('../IconLink').default.install(Vue)
        
        Vue.component('button-icon-link-light', () => import('./Component.vue'));
    }
}