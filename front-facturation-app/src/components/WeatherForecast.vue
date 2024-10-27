<template>
    <div class="weather-forecast">
      <h1>Prévisions météorologiques</h1>
      <table class="forecast-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Température (°C)</th>
            <th>Température (°F)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ formatDate(item.date) }}</td>
            <td :class="{'hot': item.isHot()}">{{ item.temperatureC }}°C</td>
            <td>{{ item.temperatureF }}°F</td>
            <td>{{ item.summary }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import api from '@/axios';
  
  // Classe représentant chaque élément des données de l'API
  class WeatherForecast {
    constructor({ date, temperatureC, temperatureF, summary }) {
      this.date = new Date(date); // Convertir la date en objet Date
      this.temperatureC = temperatureC;
      this.temperatureF = temperatureF;
      this.summary = summary;
    }
  
    // Méthode exemple pour vérifier si la température est élevée
    isHot() {
      return this.temperatureC >= 30;
    }
  }
  
  export default {
    setup() {
      const data = ref([]);
  
      const fetchData = async () => {
        try {
          const response = await api.get('/WeatherForecast');
          data.value = response.data.map(item => new WeatherForecast(item));
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
  
      const formatDate = (date) => {
        // Formater la date en chaîne de caractères (exemple : 28 Oct 2024)
        return date.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
      };
  
      onMounted(fetchData);
  
      return {
        data,
        formatDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .weather-forecast {
    margin: 20px;
  }
  
  .forecast-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .forecast-table th,
  .forecast-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .forecast-table th {
    background-color: #f4f4f4;
  }
  
  .hot {
    color: red;
  }
  </style>