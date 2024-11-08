<template>
   <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="card w-50 p-3">
         <img alt="Veboliny logo" src="../assets/logo.png" style="width: 50%;" class="mx-auto d-block mb-3">

         <form>
            <div class="form-group mb-3">
               <label for="exampleInputEmail1">Email</label>
               <input type="email" v-model="model.user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group mb-3">
               <label for="exampleInputPassword1">Mot de passe</label>
               <input type="password" v-model="model.user.password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
            </div>

            <!-- Conteneur flex pour le bouton et les liens -->
            <div class="d-flex justify-content-between align-items-center">
               <button type="button" @click="loginUser" class="btn btn-primary">Connexion</button>
               <div>
                  <a href="#" class="text-decoration-none">Mot de passe oublié</a> |
                  <router-link to="/register" class="text-decoration-none">S'inscrire</router-link>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import api from '@/axios'
export default {
  name: 'LoginVue',
  data(){
   return {
      model : {
         user : {
            email:'',
            password:''
         }
      }
   }
  },
  methods : {
   loginUser(){
         api.post('/api/login', this.model.user).then(res => {
            console.log(res.data);
            // Réinitialiser les champs du formulaire
            this.model.user = {
               email: '',
               password: ''
            };
            // Rediriger vers la page de connexion
            this.$router.push('/home');  // Remplacez "/" par la route de votre page de connexion si elle est différente
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