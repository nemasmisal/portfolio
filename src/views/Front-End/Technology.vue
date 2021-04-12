<template>
  <div class="wrapper" :style="{ background: technology.background }">
    <h1 :style="{ background: technology.background }">{{technology.name}}</h1>
    <p>{{technology.intro}}</p>
    <h3><a href="">Link</a> to the project</h3>
    <div class="img-container">
      <img v-for="(img,i) of technology.imgLinks" :key="i" :src="getDynamicImg(img)" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Technology',
  props: {
    technology: { type: Object, required: true }
  },
  setup() {
    const getDynamicImg = (path) => require('@/assets/' + path)
    return { getDynamicImg }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  max-height 976px
  background red
  position relative
  display block
h1
  width 100%
  position sticky
  top 0
  padding-top 5px
  display block
  box-shadow 0 8px 6px -6px black
  z-index 10
h3
  margin 0 auto
  padding-bottom 10px
  color #fff
p
  max-width 950px
  margin 5px auto
  padding 10px
ul
  list-style none
.img-container
  max-width 850px
  margin 0 auto
  padding-bottom 20px
  max-height 810px
  display grid
  grid-template-columns repeat(auto-fill, minmax(17rem, 1fr))
  align-items center
  justify-items center
img
  margin-bottom 10px
  width 17em
  max-width 373px
  border-radius 5px
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)

img:nth-child(3)
  @media screen and (min-width: 560px)
    grid-column 1/9
  @media screen and (min-width: 850px)
    grid-column auto
</style>