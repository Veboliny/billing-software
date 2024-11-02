<template>
   <div class="LoginPage">
      <div class="d-flex align-items-center justify-content-center vh-100">
         <div class="card w-50 p-3">
            <img alt="Veboliny logo" src="../assets/logo.png" style="width: 50%;" class="mx-auto d-block mb-3">
            
            <form>
               <div class="form-group mb-3">
                  <label for="exampleInputEmail1">E-mail</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
               </div>
               <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Mot de passe</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
               </div>
               <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Confirmer le mot de passe</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
               </div>
               <div class="d-flex justify-content-between align-items-center">
               <button type="submit" class="btn btn-primary">S'inscrire</button>
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
export default {
  name: 'RegisterVue'
}
</script>

<style>
body{
   background-color: rgb(33, 42, 55);
}
</style>