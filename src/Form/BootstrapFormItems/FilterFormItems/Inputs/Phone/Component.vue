<template lang="pug">
    include Template.pug
</template>

<script>
    import PhoneInput from './../../../../FormItems/Inputs/Phone/Component.vue'
    import BootstrapClassAdder from './../../../BootstrapClassAdder.vue'

    export default {
        mixins: [
            PhoneInput,
            BootstrapClassAdder,
        ]
    }
</script>
