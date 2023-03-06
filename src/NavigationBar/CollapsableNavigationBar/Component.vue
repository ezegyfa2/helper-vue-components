<template lang="pug">
    include Template.pug
</template>

<script>
    import ClassAdder from '../../ClassAdder.vue'

    export default {
        mixins: [
            ClassAdder
        ],
        props: {
            title: {
                type: String
            },
            title_url: {
                type: String
            },
            links: {
                type: Array
            }
        },
        data() {
            return {
                addedClasses: {
                    'ul.navbar-nav': [
                        'ms-auto',
                        'py-4',
                        'py-lg-0',
                    ]
                }
            }
        },
        mounted() {
            var navbarShrink = function () {
                const navbarCollapsible = document.body.querySelector('nav.navbar');
                if (!navbarCollapsible) {
                    return
                }
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('navbar-shrink')
                } else {
                    navbarCollapsible.classList.add('navbar-shrink')
                }
            }

            // Shrink the navbar
            navbarShrink()

            // Shrink the navbar when page is scrolled
            document.addEventListener('scroll', navbarShrink)

            // Collapse responsive navbar when toggler is visible
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('.nav-link')
            )
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', (e) => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none' && !e.target.classList.contains('dropdown-toggle')) {
                        navbarToggler.click();
                    }
                })
            })
        },
        computed: {
            navigationBarId() {
                return "navigation_bar_" + this._uid
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
