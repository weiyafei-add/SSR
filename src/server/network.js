import axios from "axios";

const serverAxios = axios.create({
  baseURL: "https://dog.ceo",
});

export default serverAxios;
