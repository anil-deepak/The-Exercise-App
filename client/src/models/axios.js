import axios from "axios";

const API_ROOT = process.env.VUE_APP_API_ROOT;

export default axios.create({
  baseURL: API_ROOT,
  timeout: 1000,
});
