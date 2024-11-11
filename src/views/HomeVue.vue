<template>
    <div>
       <!-- Inclure la navbar ici -->
       <NavbarVue />
       <h1>Hello World !</h1>
       <h1>{{ user }}</h1>
    </div>
 </template>
 
 <script>
 // Importation du composant Navbar
 import NavbarVue from './NavbarVue.vue'
 import api from '../axios'
 
 export default {
   name: 'HomeVue',
   components: {
      NavbarVue
    },
    data(){
       return {
          user : null,
    }
   },
   methods : {
    loginUser(){
          api.get('/api/user').then(res => {
             console.log(res.data);
             this.user = res.data
          }).catch(error => {
             if (error.response) {
               // Erreur avec une réponse de l'API
               console.error('Erreur de récupération du user :', error.response.data);
               console.error('Status code:', error.response.status);
             } else {
             // Autre type d'erreur
               console.error('Erreur lors de la récupération du user :', error.message);
             }
          });
       },
   },
   mounted(){
    this.loginUser();
   }
 }
 </script>
 
 <style>
 body{
    background-color: rgb(33, 42, 55);
 }
 </style>