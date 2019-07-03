<template>
    <div>
        <span>{{currentValue}}</span>
        <button v-on:click="plus">+</button>
        <button v-on:click="minus">-</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props: {
            index: Number,
            currentValue: Number
        },
        methods: {
            plus: function () {
                this.$emit('update-sum', {index: this.index, counter: this.currentValue + 1});
            },
            minus: function () {
                this.$emit('update-sum', {index: this.index, counter: this.currentValue - 1});
            },

        },
    }
</script>

<style scoped>

</style>