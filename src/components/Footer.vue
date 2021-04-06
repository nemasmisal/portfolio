<template>
  <div class="footer">
    <button class="button">Send Me Message</button>
    <div class="container">
      <form @submit.prevent="sendMsg">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone" />
        <textarea rows="10" placeholder="Comment"></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  setup() {
    const sendMsg = () => {
      console.log('msg sent')
    }
    return { sendMsg }
  }
}
</script>
<style lang="stylus" scoped>
form
  > button
    background-color #f00
    color #fff
    margin-top 10px
    margin-left 5px
    padding 10px
    border none
    font-weight bold 
    text-transform uppercase
  > input,
    textarea
    display block
    width 90%
    max-width 400px
    margin 5px auto
    padding 10px

.button
  width 180px
  height 35px
  border #f00 3px solid
  border-radius 35px
  background #fff
  margin 0 auto
  position relative
  transition all 1s ease
  outline none
  &:hover
    width 190px
    
.footer
  position fixed
  bottom 0
  left 0
  right 0
  max-width 650px
  height 2em
  overflow hidden
  margin 0 auto
  transition all 1s ease
  z-index 999
  &:hover
    height 24.8em
  &:visited
    height 10em

.container
  background-color #acacac
  padding-top 5px
  width 100%
</style>