export default {
    install(Vue) {
        require('helper-vue-components/image').default.install(Vue)

        Vue.component('hight-fit-image', () => import('./Component.vue'))
    }
}