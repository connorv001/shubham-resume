// src/components/Skills.vue
<template>
  <section>
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['skills']
}
</script>

<style>
section {
  background-color: #37474f;
  padding: 1em;
  color: #fff;
}
</style>
