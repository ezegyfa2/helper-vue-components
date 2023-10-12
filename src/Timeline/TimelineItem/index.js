export default {
    install(Vue) {
        require('helper-vue-components/image').default.install(Vue)
        
        Vue.component('timeline-item', () => import('./Component.vue'))
    }
}