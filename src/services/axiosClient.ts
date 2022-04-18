import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://graph.facebook.com/",
});

export default axiosClient;
