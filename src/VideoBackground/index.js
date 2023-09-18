export default {
    install(Vue) {
        registerVueComponent(
            'video-background',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/src/VideoBackground/Component.vue'
        )
    }
}