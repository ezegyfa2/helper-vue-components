export default {
    install(Vue) {
        let prefix = 'bootstrap'
		Vue.component(prefix + '-checkbox-input', () => import('./Inputs/CheckBox/Component.vue'))
		Vue.component(prefix + '-number-input', () => import('./Inputs/Number/Component.vue'))
		Vue.component(prefix + '-text-input', () => import('./Inputs/Text/Component.vue'))
		Vue.component(prefix + '-email-input', () => import('./Inputs/Email/Component.vue'))
		Vue.component(prefix + '-phone-input', () => import('./Inputs/Phone/Component.vue'))
		Vue.component(prefix + '-datetime-input', () => import('./Inputs/DateTime/Component.vue'))
		Vue.component(prefix + '-select', () => import('./Select/Component.vue'))
		Vue.component(prefix + '-textarea', () => import('./TextArea/Component.vue'))
    }
}