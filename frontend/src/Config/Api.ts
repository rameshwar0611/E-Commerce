import axios from 'axios';

export const API_URL = "https://e-commerce-backend-akcp.onrender.com";

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});