export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)
        
        registerVueComponent(
            'collapsable-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}