// src/components/Experience.vue
<template>
  <section>
    <h2>Experience</h2>
    <ul>
      <li v-for="experience in experiences" :key="experience.title">
        <h3>{{ experience.title }}</h3>
        <p>{{ experience.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['experiences']
}
</script>

<style>
section {
  background-color: #37474f;
  padding: 1em;
  color: #fff;
}
</style>
