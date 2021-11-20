<template lang="pug">
    include BlackFooter.pug
</template>

<script>
    export default {
        props: {
            content: {
                type: String
            }
        }
    }
</script>

<style type="text/css">
    .contact-section {
        padding-top: 5rem;
    }
    .bg-black {
        background-color: black !important;
    }
    h4, .h4 {
        font-size: 0.8rem;
        font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        text-transform: uppercase;
        letter-spacing: 0.15rem;
    }
    .contact-section .card hr {
        border-color: #64a19d;
        border-width: 0.25rem;
        width: 3rem;
        height: 1px;
    }
    .text-black-50 {
        --bs-text-opacity: 1;
        color: rgba(0, 0, 0, 0.5) !important;
    }
    small, .small {
        font-size: 0.875em;
    }
</style>
