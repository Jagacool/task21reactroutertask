import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://northwind.vercel.app/api/suppliers',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'suppliers' }
});

export default axiosInstance;
