<template>
    <div>
        <div v-for="i in counterNum">
            <Counter v-bind:index="i" v-bind:currentValue="data[i]" v-on:update-sum="updateSum"/>
        </div>
        <CounterSum v-bind:sum="sum"/>
    </div>
</template>

<script>
    import Counter from "./Counter";
    import CounterSum from "./CounterSum";

    export default {
        name: "CounterGroup",
        components: {CounterSum, Counter},
        data: function () {
            let initData = [];
            for (let i = 1; i <= this.counterNum; i++) {
                initData[i] = 0;
            }
            return {
                sum: 0,
                data: initData
            }
        },
        methods: {
            updateSum: function (change) {
                this.data[change.index] = change.counter;
                this.sum = 0;
                for (let i = 1; i <= this.counterNum; i++) {
                    this.sum += this.data[i];
                }
            }
        },
        props: {
            counterNum: Number
        }
    }
</script>

<style scoped>

</style>