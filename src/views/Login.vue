<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="Login">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <input type="submit" value="Login">
        <p>Need an account?<router-link to="/register">Register</router-link></p>

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
    
    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message));
    }

    return {
      Login, 
      email,
      password
    }
  }
}
</script>

<style>

</style>