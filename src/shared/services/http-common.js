import axios from 'axios';
import {authenticationInterceptor} from "../../iam/services/authentication.interceptor.js";

// URL de la API
const API_BASE_URL = 'https://ridefindback-eugxbdcmh0bjceg6.eastus2-01.azurewebsites.net/api/v1';

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-type': 'application/json' }
});

http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export async function obtenerVehiculos() {
  try {
    const response = await http.get('/vehicles');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los vehículos');
    }
    return response.data; // Ajusta esto según la estructura de tu JSON
  } catch (error) {
    console.error('Error al obtener datos de  vehículos:', error);
    return null;
  }
}


export async function obtenerUsuarios() {
  try {
    const response = await http.get('/vehicles');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los usuarios');
    }

    return response.data; // Ajusta esto según la estructura de tu JSON
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
    return null;
  }
}

// Add a request interceptor
http.interceptors.request.use(authenticationInterceptor);

export default http;
