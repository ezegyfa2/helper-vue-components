export default {
    install(Vue) {
        require('helper-vue-components/image').default.install(Vue)
        
        Vue.component('brand-image', () => import('./Component.vue'));
    }
}