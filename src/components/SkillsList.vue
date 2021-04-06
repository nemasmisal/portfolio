<template>
  <div class="skills-list">
    <ul>
      <transition name="left" appear>
        <li>
          <div class="left"></div>
          <router-link to>Front-End</router-link>
        </li>
      </transition>
      <transition name="right" appear>
        <li>
          <div class="right">
            <router-link to>Back-End</router-link>
          </div>
        </li>
      </transition>
      <transition name="right" appear>
        <li>
          <div class="curved-corner-bottom-left"></div>
          <router-link to>Clouds and Serverless</router-link>
        </li>
      </transition>
      <transition name="left" appear>
        <li>
          <div class="curved-corner-top-right"></div>
          <router-link to>Databases</router-link>
        </li>
      </transition>
      <li>
        <transition name="pacman" appear>
          <div class="pacman"></div>
        </transition>
      </li>
      <transition name="right" appear>
        <li>
          <router-link to>Other</router-link>
        </li>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillsList',
}

</script>

<style scoped lang="stylus">
.skills-list
  margin 0 auto
  margin-top 30px
a
  color #2c3e50
  font-weight bold
li
  list-style none
  display inline-block
  width 10rem
  margin 10px
  padding 15px 0
  text-align center
  position relative
ul
  height 650px
  overflow hidden
  li:nth-child(2)
    top -108px
    z-index 0
  li:nth-child(3)
    overflow hidden
    position relative
    top -100px 
    width 90%
    box-shadow none
    > a
      position absolute
      top 50px
      left 10px
      width 100% 
  li:nth-child(4)
    overflow hidden
    width 90%
    height 100px
    top -140px
    box-shadow none
    > a
      position relative
      top -65px
      width 100%
  li:nth-child(5)
    box-shadow none 
    top -150px
    left 30px
  li:last-child
    top -225px
.left
  width 105px
  border-top 100px solid #f00
  border-right 100px solid transparent
  line-height 20px
  position relative
  right -6px
  padding-top 10px
  z-index 2
.right
  width 105px
  border-bottom 100px solid #f00
  border-left 100px solid transparent
  position relative
  left -50px
  line-height 24px
  padding-bottom 5px
  z-index 1
.curved-corner-bottom-left
  width 180px
  height 100px
  overflow hidden
  margin 0 auto
  position relative
  right 70px
  &:before
    content ""
    display block
    width 200%
    height 200%
    position absolute
    border-radius 50%
    bottom 0
    left 0
    box-shadow -50px 50px 0 0 red
.curved-corner-top-right
  width 180px
  height 100px
  overflow hidden
  position relative
  top -15px
  right -75px
  margin 0 auto
  &:before
    content ""
    display block
    width 200%
    height 200%
    position absolute
    border-radius 50%
    top 0
    right 0
    box-shadow 50px -50px 0 0 red
.pacman
  width 0px
  height 0px
  border-right 60px solid transparent
  border-top 60px solid red
  border-left 60px solid red
  border-bottom 60px solid red
  border-top-left-radius 60px
  border-top-right-radius 60px
  border-bottom-left-radius 60px
  border-bottom-right-radius 60px
  > a
     position absolute
     left 100px
     top 68px
     
.right-enter-from,
.right-leave-to
  transform translateX(100%)
.right-enter-to,
.right-leave-from
  transform translateX(0%)
.right-enter-active,
.right-leave-active
  transition all 1s ease

.left-enter-from,
.left-leave-to
  transform translateX(-100%)
.left-enter-to,
.left-leave-from
  transform translateX(0%)
.left-enter-active,
.left-leave-active
  transition all 1s ease

.pacman-enter-from,
.pacman-leave-to
  transform translateX(-150%)
.pacman-enter-to,
.pacman-leave-from
  transform translateX(0%)
.pacman-enter-active,
.pacman-leave-active
  animation eating 2s ease

@keyframes eating 
  0% {
    transform translateX(-100%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }
  10% {
    transform translateX(-80%)
    border-top-left-radius 65px
    border-bottom-right-radius 65px
  }  
  20% {
    transform translateX(-60%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }  
  30% {
    transform translateX(-40%)
    border-top-left-radius 65px
    border-bottom-right-radius 65px
  }  
  40% {
    transform translateX(-20%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }
  50% {
    transform translateX(0%)
    border-top-left-radius 65px
    border-bottom-right-radius 65px
  }    
  60% {
    transform translateX(20%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }
  70% {
    transform translateX(40%)
    border-top-left-radius 65px
    border-bottom-right-radius 65px
  }    
  80% {
    transform translateX(60%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }
  90% {
    transform translateX(70%)
    border-top-left-radius 65px
    border-bottom-right-radius 65px
  }    
  100% {
    transform translateX(0%)
    border-top-left-radius 60px
    border-bottom-right-radius 60px
  }    

</style>
