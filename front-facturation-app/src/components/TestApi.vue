<template>
  <div>
    <h1>Données de l'API</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import api from '@/axios';

export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.get('/WeatherForecast'); // Remplacez '/endpoint' par votre chemin d'API
        this.data = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },
  },
};
</script>