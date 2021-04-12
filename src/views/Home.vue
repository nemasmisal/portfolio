<template>
  <div class="home">
    <h2>
      H<BouncingDot />, my name
      <BouncingDot />s N<BouncingDot />kolay
    </h2>
    <div class="underline"></div>
    <h3>Full-Stack Developer</h3>
    <SkillsList />
    <Footer />
  </div>
</template>

<script>
import SkillsList from '@/components/SkillsList.vue'
import BouncingDot from '@/components/BouncingDot.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    SkillsList,
    BouncingDot,
    Footer
  }
}
</script>
<style lang="stylus" scoped>
h2
  position relative
.home
  background #f8f8f8
  max-width 650px
  margin 0 auto
  padding-top 30px
.underline
  border 2px solid red
  border-radius 100%
.box
  display inline-block
</style>
