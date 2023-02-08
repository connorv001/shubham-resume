// src/components/Education.vue
<template>
  <section>
    <h2>Education</h2>
    <ul>
      <li v-for="education in educations" :key="education.degree">
        <h3>{{ education.degree }} in {{ education.field }}</h3>
        <p>{{ education.institution }} - {{ education.graduationYear }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['educations']
}
</script>

<style>
section {
  background-color: #37474f;
  padding: 1em;
  color: #fff;
}
</style>
