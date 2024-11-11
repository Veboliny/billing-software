<template>
    <div class="LoginPage">
       <div class="d-flex align-items-center justify-content-center vh-100">
          <div class="card w-50 p-3">
             <img alt="Veboliny logo" src="../assets/vue.svg" style="width: 50%;" class="mx-auto d-block mb-3">
             
             <form>
                <div class="form-group mb-3">
                   <label for="exampleInputUsername1">Nom d'utilisateur</label>
                   <input type="text" v-model="model.user.name" class="form-control" id="exampleInputUsername1" placeholder="Nom d'utilisateur">
                </div>
                <div class="form-group mb-3">
                   <label for="exampleInputEmail1">E-mail</label>
                   <input type="email" v-model="model.user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group mb-3">
                   <label for="exampleInputPassword1">Mot de passe</label>
                   <input type="password" v-model="model.user.password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
                </div>
                <div class="d-flex justify-content-between align-items-center">
                <button type="button" @click="registerUser" class="btn btn-primary">S'inscrire
                   <router-link to="/" class="text-decoration-none"></router-link>
 
                </button>
                <div>
                   <router-link to="/" class="text-decoration-none">Se connecter</router-link>
                </div>
             </div>
             </form>
          </div>
       </div>
    </div>
 </template>
 
 <script>
 import api from '../axios'
 export default {
   name: 'RegisterVue',
   data(){
    return {
       model : {
          user : {
             name: '',
             email:'',
             password:''
          }
       }
    }
   },
   methods : {
    registerUser(){
          api.post('/api/register', this.model.user).then(res => {
             console.log(res.data);
             // Réinitialiser les champs du formulaire
             this.model.user = {
                name: '',
                email: '',
                password: ''
             };
             // Rediriger vers la page de connexion
             this.$router.push('/');  // Remplacez "/" par la route de votre page de connexion si elle est différente
          }).catch(error => {
             console.error('Erreur lors de l\'inscription :', error);
          });
       },
   }
 }
 </script>
 
 <style>
 body{
    background-color: rgb(33, 42, 55);
 }
 </style>