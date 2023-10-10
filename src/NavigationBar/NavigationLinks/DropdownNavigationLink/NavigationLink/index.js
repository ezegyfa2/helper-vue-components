export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)
        require('bootstrap/js/src/dropdown')
        
        Vue.component('dropdown-navigation-link', () => import('./Component.vue'))
    }
}