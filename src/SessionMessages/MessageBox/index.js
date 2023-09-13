export default {
    install(Vue) {
        registerVueComponent(
            'message-box',
            require('./Component.vue').default,
            Vue,
			'helper-vue-components/SessionMessages/MessageBox/Component.vue'
        )
    }
}