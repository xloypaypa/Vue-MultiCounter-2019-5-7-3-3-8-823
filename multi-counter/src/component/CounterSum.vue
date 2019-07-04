<template>
    <div>
        {{sum()}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "CounterSum",
        computed: mapGetters([
            'sum',
        ]),
    }
</script>

<style scoped>

</style>