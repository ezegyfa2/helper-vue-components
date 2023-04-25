<template lang="pug">
    include Template.pug
</template>

<script>
    import EmailInput from './../../../../FormItems/Inputs/Email/Component.vue'
    import BootstrapClassAdder from './../../../BootstrapClassAdder.vue'

    export default {
        mixins: [
            EmailInput,
            BootstrapClassAdder,
        ]
    }
</script>
