<template lang="pug">
    include Template.pug
</template>

<script>
    import TextInput from './../../../../FormItems/Inputs/Text/Component.vue'
    import BootstrapClassAdder from './../../../BootstrapClassAdder.vue'

    export default {
        mixins: [
            TextInput,
            BootstrapClassAdder,
        ]
    }
</script>
