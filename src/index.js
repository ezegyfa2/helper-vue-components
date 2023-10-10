window.mergeComponentClasses = (componentClasses) => {
    /*if (!componentClasses[0]) {

	}*/
    if (componentClasses[0].data) {
        componentClasses[0] = componentClasses[0].data().addedClasses;
    }
    let currentComponentClasses = Object.assign({}, componentClasses[0]);
    for (let i = 1; i < componentClasses.length; ++i) {
        if (componentClasses[i].data) {
            componentClasses[i] = componentClasses[i].data().addedClasses;
        }
        for (const [key, value] of Object.entries(componentClasses[i])) {
            let currentValue;
            if (Array.isArray(value)) {
                currentValue = value;
            } else {
                currentValue = [value];
            }
            if (key in currentComponentClasses) {
                if (!Array.isArray(currentComponentClasses[key])) {
                    // && !currentComponentClasses[key].contains(value)
                    currentComponentClasses[key] = [currentComponentClasses[key]];
                }
                currentComponentClasses[key] =
                    currentComponentClasses[key].concat(value);
            } else {
                currentComponentClasses[key] = value;
            }
        }
    }
    return currentComponentClasses;
};

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

export default {
    install(Vue) {
        require('js-helper-methods/index');
        require('./ClassAdder').default.install(Vue)

        //Vue.use(BootstrapVue)
        //Vue.use(IconsPlugin)
        
        //require("bootstrap-css-only/css/bootstrap.min.css");
        //require("mdbvue/lib/css/mdb.min.css");
        //require("@fortawesome/fontawesome-free/css/all.min.css");

        /*Vue.component('google-map', () => import('vue-google-maps-ui'))*/
        Vue.component('range-slider', () => import('multi-range-slider-vue'))
        Vue.component('dynamic-template', () => import('./DynamicTemplate/Component.vue'))
        Vue.component('page', () => import('./Pages/Page/Component.vue'))
        Vue.component('navigation-link', () => import('./NavigationBar/NavigationLinks/NavigationLink/Component.vue'))
        Vue.component('dropdown-navigation-link', () => import('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue'))
        Vue.component('black-footer', () => import('./Footer/BlackFooter/Component.vue'))

        Vue.component('vue-link', () => import('./Link/Component.vue'))
        Vue.component('button-icon-link', () => import('./IconLinks/ButtonIconLink/Component.vue'))
        Vue.component('button-icon-link-light', () => import('./IconLinks/ButtonIconLinkLight/Component.vue'))
        Vue.component('button-icon-link2', () => import('./IconLinks/ButtonIconLink2/Component.vue'))
        Vue.component('rounded-icon-link', () => import('./IconLinks/RoundedIconLink/Component.vue'))
        Vue.component('icon-link-with-right-text', () => import('./IconLinks/IconWithRightText/Component.vue'))
        Vue.component('wertically-icon-links', () => import('./IconLinks/WerticallyIconLinks/Component.vue'))
        Vue.component('delete-icon-link', () => import('./IconLinks/DeleteIconLink/Component.vue'))
        Vue.component('edit-icon-link', () => import('./IconLinks/EditIconLink/Component.vue'));
        Vue.component('create-icon-link', () => import('./IconLinks/CreateIconLink/Component.vue'));

        Vue.component('brand-image', () => import('./BrandImage/Component.vue'));
        Vue.component('dynamic-component', () => import('./DynamicComponent/Component.vue'));
        Vue.component('development-child', () => import('./DevelopmentTest/Child.vue'));
        Vue.component('right-content', () => import('./RightContent/Component.vue'));
        Vue.component('video-background', () => import('./VideoBackground/Component.vue'));
        Vue.component('vue-table', () => import('./Tables/Table/Component.vue'));
        Vue.component('vue-table-with-edit-buttons', () => import('./Tables/TableWithEditButtons/Component.vue'));

        Vue.component('vue-select', () => import('./Form/Select/Component.vue'));
        Vue.component('vue-form', () => import('./Form/Form/Component.vue'));
        Vue.component('multi-page-form', () => import('./Form/MultiPageForm/Component.vue'));
        Vue.component('bootstrap-multi-page-form', () => import('./Form/BootstrapMultiPageForm/Component.vue'));
        Vue.component('bootstrap-form', () => import('./Form/BootstrapForm/Component.vue'));
        Vue.component('form-item-with-validation-errors', () => import('./Form/FormItemsWithoutLabel/FormItemWithValidationErrors/Component.vue'));
        Vue.component('form-item-with-label', () => import('./Form/FormItems/FormItemWithLabel/Component.vue'));
        Vue.component('form-item-with-order', () => import('./Form/BootstrapFormItems/FilterFormItems/FormItemWithOrder/Component.vue'));
        Vue.component('csrf-input', () => import('./CsrfInput/Component.vue'));

        Vue.component('bootstrap-pagination', () => import('./Pagintation/BootstrapPagination/Pagination/Component.vue'));
        Vue.component('bootstrap-pagination-item', () => import('./Pagintation/BootstrapPagination/Item/Component.vue'));
        Vue.component('centered-content', () => import('./Containers/CenteredContent/Component.vue'));
        Vue.component('section-container', () => import('./Containers/Section/Component.vue'));
        Vue.component('skew-container', () => import('./Containers/Skew/Component.vue'));

        Vue.component('carousel', () => import('./Carousel/Carousel/Component.vue'));
        Vue.component('carousel-slide', () => import('./Carousel/CarouselSlide/Component.vue'));
        Vue.component('carousel-button', () => import('./Buttons/CarouselButton/Component.vue'));
        Vue.component('dynamic-zoom-carousel-slide', () => import('./Carousel/DynamicZoomCarouselSlide/Component.vue'));
        Vue.component('zoom-carousel-slide', () => import('./Carousel/ZoomCarouselSlide/Component.vue'));
        
        Vue.component('height-fit-image', () => import('./HeightFitImage/Component.vue'));

        Vue.component('VSelect', require('./Form/VSelect/Component.vue').default);
        require('./Form/FormItems/register.js').default.install(Vue);
        require('./Form/FormItemsWithoutLabel/register.js').default.install(Vue);
        require('./Form/BootstrapFormItems/FormItems/register.js').default.install(
            Vue
        );
        require('./Form/BootstrapFormItems/FormItemsWithoutLabel/register.js').default.install(
            Vue
        );
        require('./Form/BootstrapFormItems/FilterFormItems/register.js').default.install(
            Vue
        );
    },
};
