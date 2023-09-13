export default {
    install(Vue) {
        registerVueComponent(
            'navigation-link',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/NavigationBar/NavigationLinks/NavigationLink/Component.vue'
        )
    }
}