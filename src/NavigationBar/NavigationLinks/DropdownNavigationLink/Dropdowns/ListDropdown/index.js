export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)

        Vue.component('list-dropdown', () => import('./Component.vue'))
    }
}
