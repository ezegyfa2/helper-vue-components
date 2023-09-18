window.$ = window.jQuery = require('jquery');
require('bootstrap')
global.he = require('he')
window.Vue = require('vue').default

window.templates = {}
window.requiredPackages = []

window.addRequiredPackage = (packageName) => {
    if (!window.requiredPackages.includes(packageName)) {
        window.requiredPackages.push(packageName)
    }
}
window.componentProperties = {}

require('js-helper-methods/vueMethods')
require('helper-vue-components/DynamicComponent').default.install(Vue)
require('helper-vue-components/DynamicTemplate').default.install(Vue)