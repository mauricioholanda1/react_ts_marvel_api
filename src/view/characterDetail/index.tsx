import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import "./characterDetail.scss";
import { useEffect, useState } from "react";
import { getCharactersInfo, getExtraInfo } from "../../api/characters";

type CharacterParams = {
  id: string;
};

type CharacterProps = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: {
    available: number;
    items: [];
  };
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
  events: {
    available: number;
  };
};

type ExtraDataProps = {
  id: number;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export default function CharacterDetail() {
  const params = useParams<CharacterParams>();
  const [character, setCharacter] = useState<CharacterProps>();
  const [extraData, setExtraData] = useState<ExtraDataProps[]>([]);
  console.log(extraData);
  const characterId = params.id;

  useEffect(() => {
    getChar(characterId);
  }, [characterId]);

  async function getChar(id: string) {
    const response = await getCharactersInfo(id);
    setCharacter(response);

    getComics(response.comics.items);
  }

  function getComics(extraInfos: []) {
    extraInfos.map(async (element: { resourceURI: string }) => {
      const response = await getExtraData(element.resourceURI);
      const { id, description, thumbnail } = response;
      const newData = { description, thumbnail, id };
      setExtraData((prevState) => [...prevState, newData]);
    });
  }

  async function getExtraData(collectionURI: string) {
    const response = await getExtraInfo(collectionURI);
    return response;
  }

  if (!character) {
    return (
      <div id="characterDetails-page">
        <Header />
        <main className="content">
          <h1>Carregando</h1>
        </main>
      </div>
    );
  }

  return (
    <div id="characterDetails-page">
      <Header />
      <main className="content">
        <div>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
          <div className="infos">
            <h1>{character.name}</h1>
            <p>{character.description}</p>

            <p>comics: {character.comics.available}</p>
            <p>series: {character.series.available}</p>
            <p>stories: {character.stories.available}</p>
            <p>events: {character.events.available}</p>
          </div>
        </div>
        <div className="comics"></div>
      </main>
    </div>
  );
}
