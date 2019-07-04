<template>
    <div>
        <div v-for="i in counterNum">
            <Counter v-bind:index="i - 1"/>
        </div>
        <CounterSum/>
    </div>
</template>

<script>
    import Counter from "./Counter";
    import CounterSum from "./CounterSum";

    export default {
        name: "CounterGroup",
        components: {CounterSum, Counter},
        props: {
            counterNum: Number
        }
    }
</script>

<style scoped>

</style>