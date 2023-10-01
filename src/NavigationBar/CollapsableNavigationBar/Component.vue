<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            title_url: {
                type: String
            },
            link_sections: {
                type: Array
            },
            brand_section: {
                type: Object
            }
        },
        mounted() {
            var navbarShrink =  () => {
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
            responsiveNavItems.map( (responsiveNavItem) => {
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
