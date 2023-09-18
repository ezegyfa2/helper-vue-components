export default {
    install(Vue) {
        require('../IconLink').default.install(Vue)
        
        registerVueComponent(
            'button-icon-link-light',
            require('./Component.vue').default,
            Vue
        );
    }
}