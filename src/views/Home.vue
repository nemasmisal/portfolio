<template>
  <div class="home">
    <h2>
      H<BouncingDot />, my name
      <BouncingDot />s N<BouncingDot />kolay
    </h2>
    <div class="underline"></div>
    <h3>Full-Stack Developer</h3>
    <SkillsList />
  </div>
</template>

<script>
import SkillsList from '@/components/SkillsList.vue'
import BouncingDot from '@/components/BouncingDot.vue'

export default {
  name: 'Home',
  components: {
    SkillsList,
    BouncingDot
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
.underline
  border 2px solid red
  border-radius 100%
.box
  display inline-block
</style>
