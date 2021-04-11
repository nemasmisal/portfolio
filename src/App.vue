<template>
  <router-view />
    <Footer />
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style lang="stylus">
html, body
  background #f8f8f8
  height 100%

*
  margin 0
  padding 0
  text-decoration none

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin 0 auto
  padding 0
  height 100%

ul
  margin 0 auto
  padding 0
</style>
