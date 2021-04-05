<template>
  <div class="box">
    <p class="letter bounce">.</p>
    <p class="letter">ı</p>
  </div>
</template>

<script>
export default {
  name: 'BouncingDot'
}
</script>

<style lang="stylus" scoped>
.bounce
  color #2c3e50
  position absolute
  top -16px
.letter 
  text-align center
  margin 0
  font-weight bold
  
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
    color #f00
  }

  to {
    transform: translate3d(0, -10px, 0);
  }
}

.bounce 
  animation bounce 0.4s 6 alternate
</style>