<template>
  <div class="home">
    <h1>Welcome, Magister {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat";

export default {
  setup () {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if(user) {
        name.value = user.email.split("@")[0]
      }
    })
    const Logout = () => { 
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
    }
    return {
      name,
      Logout
    }
  }


}

</script>
