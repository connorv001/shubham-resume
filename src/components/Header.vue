// src/components/Header.vue
<template>
  <header>
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: ['name', 'title']
}
</script>

<style>
header {
  background-color: #1e88e5;
  padding: 1em;
  text-align: center;
  color: #fff;
}
</style>
