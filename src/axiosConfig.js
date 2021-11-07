import axios from "axios";
const instance = axios.create({
  baseURL: "https://secure-brushlands-68351.herokuapp.com",
});
export default instance;