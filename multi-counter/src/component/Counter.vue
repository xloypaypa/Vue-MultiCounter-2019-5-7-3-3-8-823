<template>
    <div>
        <span>{{getCountByIndex(index)}}</span>
        <button v-on:click="increment(index)">+</button>
        <button v-on:click="decrement(index)">-</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: "Counter",
        props: {
            index: Number,
        },
        methods: {
            ...mapMutations([
                'increment',
                'decrement',
            ]),
        },
        computed: mapGetters([
            'getCountByIndex',
        ]),
    }
</script>

<style scoped>

</style>