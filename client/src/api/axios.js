import axios from "axios";



export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api/v1/',
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
  }
});
