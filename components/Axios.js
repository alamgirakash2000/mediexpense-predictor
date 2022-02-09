import axios from "axios";

const instance = axios.create({
  baseURL: "https://mediexpense-predictor.herokuapp.com/",
});

export default instance;
