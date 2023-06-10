import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Reemplaza con la URL de tu servidor Django
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // O reemplaza con la URL de tu servidor Django
  },
});

export default instance;
