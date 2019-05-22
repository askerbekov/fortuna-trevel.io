import axios from "axios";

const instance = axios.create({
  baseURL: "https://fortuna-travel-007.firebaseio.com/"
});

export default instance;
