// src/App.vue
<template>
  <div id="app">
    <Header :name="resumeData.name" :title="resumeData.title"/>
    <About :description="resumeData.about.description"/>
    <Skills :skills="resumeData.skills"/>
    <Experience :experience="resumeData.experience"/>
    <Projects :projects="resumeData.projects"/>
    <Education :educations="resumeData.educations"/>
    <Footer :message="resumeData.footer.message"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Footer
  },
  data () {
    return {
      resumeData: {}
    }
  }
}
</script>
