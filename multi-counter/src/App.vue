<template>
  <div id="app">
    <CounterGroup v-bind:counterNum="2"/>
  </div>
</template>

<script>

import CounterGroup from "./component/CounterGroup";
export default {
  name: 'app',
  components: {CounterGroup},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
