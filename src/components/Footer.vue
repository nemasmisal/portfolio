<template>
  <div class="footer">
    <button class="button">Send Me Message</button>
    <div class="container">
      <form @submit.prevent="sendMsg">
        <input type="text" v-model="v$.form.name.$model" placeholder="Name" />
        <div
          v-if="v$.form.name.$dirty && v$.form.name.$invalid"
          :class="{ error: v$.form.name.$dirty }"
        >
          <p v-for="err in v$.form.name.$silentErrors" :key="err.message">{{err.$message}}</p>
        </div>
        <input type="email" v-model="v$.form.email.$model" placeholder="Email" />
        <div
          v-if="v$.form.email.$dirty && v$.form.email.$invalid"
          :class="{ error: v$.form.email.$dirty }"
        >
          <p v-for="err in v$.form.email.$silentErrors" :key="err.message">{{err.$message}}</p>
        </div>
        <input type="number" v-model="v$.form.phone.$model" placeholder="Phone" />
        <div
          v-if="v$.form.phone.$dirty && v$.form.phone.$invalid"
          :class="{ error: v$.form.phone.$dirty }"
        >
          <p v-for="err in v$.form.phone.$silentErrors" :key="err.message">{{err.$message}}</p>
        </div>
        <textarea rows="10" v-model="v$.form.comment.$model" placeholder="Comment"></textarea>
        <div
          v-if="v$.form.comment.$dirty && v$.form.comment.$invalid"
          :class="{ error: v$.form.comment.$dirty }"
        >
          <p v-for="err in v$.form.comment.$silentErrors" :key="err.message">{{err.$message}}</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, maxLength, minLength, numeric } from '@vuelidate/validators'
import { computed, ref } from 'vue'
export default {
  name: 'Footer',
  setup() {
    const form = ref({ name: '', email: '', phone: '', comment: '' });
    const rules = computed(() => ({
      form: {
        name: { required, maxLength: maxLength(20), minLength: minLength(4) },
        email: { required, email },
        phone: { required, numeric },
        comment: { required, minLength: minLength(10), maxLength: maxLength(200) }
      }
    }));
    const v$ = useVuelidate(rules, { form });
    const sendMsg = () => {
      form.value = { name: '', email: '', phone: '', comment: '' };
      v$.value.form.$reset();
      //TODO send request with the values
    }
    return { sendMsg, form, v$ }
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
    outline none
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
.error
  border 2px solid red
  display block
  margin 5px auto
  padding 5px
  border-radius 3px
  text-align center
  width 80%
  max-width 400px
</style>