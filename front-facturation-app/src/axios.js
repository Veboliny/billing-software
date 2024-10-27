// src/axios.js

import axios from 'axios';

// Créer une instance Axios avec une configuration par défaut
const api = axios.create({
  baseURL: 'http://localhost:5027', // Remplacez par votre URL de base
  timeout: 10000, // Temps d'attente maximum
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur de requêtes (facultatif)
api.interceptors.request.use(
  (config) => {
    // Ajouter des headers d'authentification, si nécessaire
    const token = localStorage.getItem('token'); // Exemple d'obtention d'un token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponses (facultatif)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gérer les erreurs globales ici
    return Promise.reject(error);
  }
);

export default api;