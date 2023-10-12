export default {
    install(Vue) {
        require('helper-vue-components/image').default.install(Vue)

        Vue.component('team-member', () => import('./Component.vue'))
    }
}