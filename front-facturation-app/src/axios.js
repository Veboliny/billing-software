// src/axios.js
import axios from 'axios';

// import { getJwtToken } from '@/services/authService';

// Créer une instance Axios avec une configuration par défaut
const api = axios.create({
  baseURL: 'https://localhost:5050/',
  headers: {
    'Content-Type': 'application/json',
    
  },
});


// Intercepteur de requêtes (facultatif)
// Ajout d'un intercepteur pour ajouter le token aux requêtes
// api.interceptors.request.use(async config => {
//   const token = await getJwtToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Intercepteur de réponses (facultatif)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gérer les erreurs globales ici
    return Promise.reject(error);
  }
);

export default api;