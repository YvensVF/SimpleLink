import axios from "axios";

export const key = "654ddd47b89a2cb96419502c8d30fb269e552404"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers:{
    'Authorization':`Bearer ${key}`
  }
})

export default api;