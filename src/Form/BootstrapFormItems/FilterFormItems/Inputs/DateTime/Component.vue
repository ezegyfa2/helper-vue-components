<template lang="pug">
    include Template.pug
</template>

<script>
    import DateTimeInput from './../../../../FormItems/Inputs/DateTime/Component.vue'
    import BootstrapClassAdder from './../../../BootstrapClassAdder/Component.vue'

    export default {
        mixins: [
            DateTimeInput,
            BootstrapClassAdder,
        ]
    }
</script>
