<template>
  <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="Register">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <input type="submit" value="Register">
        <p>Have an account?<router-link to="/login">Login</router-link></p>

      </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat";
export default {
  setup () {
    const email = ref("");
    const password = ref("ref");
    
    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => alert(user))
        .catch(err => alert(err.message));
    }

    return {
      Register, 
      email,
      password
    }
  }
}
</script>

<style>

</style>