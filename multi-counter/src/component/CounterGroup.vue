<template>
    <div>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
</template>

<script>
    import Counter from "./Counter";
    export default {
        name: "CounterGroup",
        components: {Counter}
    }
</script>

<style scoped>

</style>