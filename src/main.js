import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyD-aGpZvxD08xCK8o58E1YkIrFPy16VXHs",
    authDomain: "vue-auth-ffd60.firebaseapp.com",
    projectId: "vue-auth-ffd60",
    storageBucket: "vue-auth-ffd60.appspot.com",
    messagingSenderId: "284491488688",
    appId: "1:284491488688:web:161b2edaf44b71ab22ca75"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
