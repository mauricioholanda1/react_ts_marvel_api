import api from "../services/api";

export function getCharacters(): Promise<any> {
  return api.get("/v1/public/characters");
}
