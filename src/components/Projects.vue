// src/components/Projects.vue
<template>
  <section>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style>
section {
  background-color: #37474f;
  padding: 1em;
  color: #fff;
}
</style>
