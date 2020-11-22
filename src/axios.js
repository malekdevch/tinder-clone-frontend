import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-by-malek.herokuapp.com",
});

export default instance;
