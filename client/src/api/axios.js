import axios from "axios";

<<<<<<< HEAD
=======


>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api/v1/',
  withCredentials: true,
  headers: {
<<<<<<< HEAD
    // "Content-type": "application/json",
=======
    "Content-type": "application/json",
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
  }
});
