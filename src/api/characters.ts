import api from "../services/api";

export async function getCharacters(): Promise<any> {
  const response = await api.get("/v1/public/characters");
  const { results } = response.data.data;
  return results;
}

export async function getCharactersInfo(characterId: string): Promise<any> {
  const response = await api.get(`/v1/public/characters/${characterId}`);
  const { results } = response.data;
  console.log("getCharactersInfo", results);
  return results;
}
