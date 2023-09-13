export default {
    install(Vue) {
        registerVueComponent(
            'vue-table',
            require('./Component.vue').default,
            Vue,
            'helper-vue-components/Tables/Table/Component.vue'
        )
    }
}