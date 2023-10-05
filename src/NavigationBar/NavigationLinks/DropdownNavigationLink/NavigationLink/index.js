export default {
    install(Vue) {
        require('helper-vue-components/ClassAdder').default.install(Vue)
        require('bootstrap/js/src/dropdown')
        
        registerVueComponent(
            'dropdown-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}