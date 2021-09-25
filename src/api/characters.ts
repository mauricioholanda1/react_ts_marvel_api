import api from "../services/api";

export async function getCharacters(nameChar: string): Promise<any> {
  const response = await api.get(
    `/v1/public/characters?nameStartsWith=${nameChar}`
  );
  const { results } = response.data.data;
  return results;
}

export async function getCharactersInfo(characterId: string): Promise<any> {
  const response = await api.get(`/v1/public/characters/${characterId}`);
  const characterData = response.data.data.results[0];
  return characterData;
}
export async function getExtraInfo(collectionURI: string): Promise<any> {
  const response = await api.get(collectionURI);
  return response.data.data.results[0];
}
