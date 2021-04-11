<template>
  <Technology v-for="technology of stack" :key="technology._id" :technology="technology" />
</template>
<script>
import Technology from './Technology.vue';
export default {
  name: 'FrontEndList',
  components: { Technology },
  setup() {
    const stack = { //TODO replace mock data with call to back-end api
      javascript: {
        _id: 1,
        name: 'JavaScript',
        intro: 'Sucessfully grade as JS Web Developer in 2021 at SoftUni Sofia, Bulgaria.',
        imgLinks: ['Front-End/js1.png', 'Front-End/js2.png', 'Front-End/js3.png'],
        background: '#f7df1e'
      },
      angular: {
        _id: 1,
        name: 'Angular',
        intro: 'In November 2020 sucessfully finish Angular course with excelent grade.',
        imgLinks: ['Front-End/angular1.png', 'Front-End/angular2.png', 'Front-End/angular3.png'],
        background: '#DD0031'
      },
      vuejs: {
        _id: 2,
        name: 'VueJS',
        intro: 'In January 2021 sucessfully finish VueJS course with excelent grade.',
        imgLinks: ['Front-End/vue1.png', 'Front-End/vue3.png', 'Front-End/vue2.png'],
        background: '#42b983'
      }
    };
    return { stack };
  },
};
</script>
<style lang="stylus" scoped></style>
