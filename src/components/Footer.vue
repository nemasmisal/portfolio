<template>
  <div class="footer">
    <div class="contacts">
      <button class="button" @click="handleFormVisibility">Send Me Message</button>
      <a href="https://linkedin.com/in/nikolay-topalov" target="_blank">
        <img src="@/assets/linkedin.svg" />
      </a>
      <a href="https://github.com/nemasmisal" target="_blank">
        <img src="@/assets/github.svg" />
      </a>
      <a href="mailto:nikolay@nemasmisal.online?subject=QFPW:">
        <img src="@/assets/mail.svg" />
      </a>
    </div>
    <div class="form-container" v-if="isFormVissible">
      <button class="close" @click="handleFormVisibility">x</button>
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
    const isFormVissible = ref(false);
    const handleFormVisibility = () => isFormVissible.value = !isFormVissible.value;

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
    return { sendMsg, form, v$, isFormVissible, handleFormVisibility }
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
  width 150px
  height 35px
  border #2c3e50 solid 2px 
  border-radius 35px
  background #fff
  transition all 1s ease
  outline none
  vertical-align super
  font-weight bold
  &:hover
    cursor pointer
    border none 
    background #f00
 
.footer
  position fixed
  bottom 20px
  left 0
  right 0
  max-width 650px
  margin 0 auto
  z-index 999

.form-container
  background-color #acacac
  padding-top 5px
  width 100%
  position absolute 
  bottom 80px
  left 0
  right 0
  max-width 450px
  margin 0 auto
  > .close
    color red
    border none
    background none
    font-size 20px
    outline none
    width 94%
    text-align right
    &:hover
      cursor pointer
    
.error
  border 2px solid red
  display block
  margin 5px auto
  padding 5px
  border-radius 3px
  text-align center
  width 80%
  max-width 400px
.contacts
  > a
    padding 5px
    margin 5px
    display inline-block
    transition all 1s ease
    &:hover
      background #f00
      border-radius 5%

</style>