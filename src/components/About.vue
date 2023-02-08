// src/components/About.vue
<template>
  <section>
    <h2>About Me</h2>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: ['description']
}
</script>

<style>
section {
  background-color: #37474f;
  padding: 1em;
  color: #fff;
}
</style>
