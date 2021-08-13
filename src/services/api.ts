import axios from "axios";

const PRIVATE_KEY = "5800a5b37045eb058f7cedc33cdc10ee";

const api = axios.create({
  baseURL: "http://gateway.marvel.com",
  params: {
    ts: 1,
    apikey: PRIVATE_KEY,
    hash: "31ae1f447295f8706063cd5869527aad",
  },
});

export default api;
