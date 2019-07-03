<template>
    <div>
        <span>{{counter}}</span>
        <button v-on:click="counter += 1">+</button>
        <button v-on:click="counter -= 1">-</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                counter: 0
            }
        }
    }
</script>

<style scoped>

</style>