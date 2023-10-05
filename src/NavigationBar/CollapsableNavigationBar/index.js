export default {
    install(Vue) {
        require('bootstrap/js/src/collapse')
        registerVueComponent(
            'collapsable-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}