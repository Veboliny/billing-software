<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/home" class="navbar-brand px-3">Vebo' Facturation</router-link>
      
      <div class="collapse navbar-collapse px-4" id="navbarSupportedContent">
          <div class="text-secondary ms-auto">
              <router-link to="/" class="nav-link">Sortir</router-link>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
name: 'NavbarVue'
}
</script>

<style>
/* Ajoutez votre style ici si nécessaire */
</style>