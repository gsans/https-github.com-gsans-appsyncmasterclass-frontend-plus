<template>
  <div class="w-full mt-5 flex justify-center items-center flex-col p-5 md:p-0">
    <i class="fab fa-twitter text-blue text-4xl mb-8"></i>
    <p class="font-bold text-2xl mb-4">Log in to Twitter</p>
    <div class="w-full md:w-1/3 bg-lightblue border-b-2 border-dark mb-4 p-2">
      <p class="text-dark">Phone, email, or username</p>
      <input v-model="email" class="w-full bg-lightblue text-lg" type="text" ref="email">
    </div>
    <div class="w-full md:w-1/3 bg-lightblue border-b-2 border-dark mb-4 p-2">
      <p class="text-dark">Password</p>
      <input v-model="password" class="w-full bg-lightblue text-lg" type="password">
    </div>
    <button @click.prevent="signIn" class="w-full md:w-1/3 font-bold rounded-full bg-blue text-white p-3 pl-3 pr-3 hover:bg-darkblue">Log in</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  created: function() {
    this.$nextTick(() => this.$refs.email.focus())
  },
  methods: {
    ...mapActions('authentication', [
      'signInUser',
      'logoutUser',
    ]),
    async signIn() {
      try {
        await this.signInUser({ email: this.email, password: this.password });
      } catch (error) {
        this.logoutUser();
        alert('Error signing in, please check console for error detail')
        console.log('error signing in', error);
      }
    },
  }
}
</script>