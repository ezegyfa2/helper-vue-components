export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        Vue.component('navigation-link', () => import('./Component.vue'))
    }
}