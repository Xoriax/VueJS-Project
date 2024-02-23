<template>
    <div>
      <button v-if="!userName" @click="signIn" class="btnsign">
        Connexion
      </button>
      <button v-else @click="signOut" class="btnsign">
        Déconnexion
      </button>
  
      <!-- Ajouter le composant GoogleLogin -->
      <google-login
        :clientId="253825913555-sqr99hjsinsgiepi5cdcf0u1ma68e9te.apps.googleusercontent.com"
        @success="onGoogleSuccess"
        @error="onGoogleError"
      >
        Se connecter avec Google
      </google-login>
    </div>
  </template>
  
  <script>
  // Importer GoogleLogin depuis la dépendance
  import { GoogleLogin } from 'vue3-google-login';
  
  export default {
    name: "SigninButton",
    components: {
      GoogleLogin,
    },
    data() {
      return {
        userName: null,
      };
    },
    methods: {
      signIn() {
        // Votre logique de connexion avec Microsoft
      },
      signOut() {
        // Votre logique de déconnexion avec Microsoft
      },
      onGoogleSuccess(googleUser) {
        // Traitement après la connexion réussie avec Google
        console.log('Google user:', googleUser);
      },
      onGoogleError(error) {
        // Traitement en cas d'erreur de connexion avec Google
        console.error('Google login error:', error);
      },
    },
  };
  </script>
  
  <style>
  .btnsign {
    background-color: #3dc45a;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 13px 40px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    margin: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btnsign:hover {
    background-color: #6beb71;
    color: black;
  }
  </style>
  