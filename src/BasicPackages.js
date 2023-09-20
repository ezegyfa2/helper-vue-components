window.$ = window.jQuery = require('jquery');
require('bootstrap')
global.he = require('he')

window.templates = {}
window.requiredPackages = []

window.addRequiredPackage = (packageName) => {
    if (!window.requiredPackages.includes(packageName)) {
        window.requiredPackages.push(packageName)
    }
}
window.componentProperties = {}

require('js-helper-methods/vueMethods')
