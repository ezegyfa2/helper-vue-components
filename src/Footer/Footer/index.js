export default {
    install(Vue) {
        require('helper-vue-components/ReactiveProperties/ComponentSize').default.install(Vue)
        require('helper-vue-components/ReactiveProperties/WindowSize').default.install(Vue)

        Vue.component('vue-footer', () => import('./Component.vue'))
    }
}