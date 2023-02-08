// src/components/Footer.vue
<template>
  <footer>
    <p>{{ message }}</p>
  </footer>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
footer {
  background-color: #1e88e5;
  padding: 1em;
  text-align: center;
  color: #fff;
}
</style>
