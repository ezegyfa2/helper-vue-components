import { BContainer } from 'bootstrap-vue'
import { BRow } from 'bootstrap-vue'
import { BCol } from 'bootstrap-vue'

export default {
    install(Vue) {
        require('helper-vue-components/image').default.install(Vue)
        
        Vue.component('b-container', BContainer)
        Vue.component('b-row', BRow)
        Vue.component('b-col', BCol)

        Vue.component('skew-container', () => import('./Component.vue'))
    }
}