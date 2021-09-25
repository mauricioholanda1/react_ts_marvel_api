import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import "./characterDetail.scss";
import { useEffect, useState } from "react";
import { getCharactersInfo } from "../../api/characters";
import ExtraInfoDetail from "./components/extraInfoDetails/extraInfoDetails";

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
    items: [{ resourceURI: string }];
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

export default function CharacterDetail() {
  const params = useParams<CharacterParams>();
  const [character, setCharacter] = useState<CharacterProps>();

  const characterId = params.id;

  useEffect(() => {
    getChar(characterId);
  }, [characterId]);

  async function getChar(id: string) {
    const response = await getCharactersInfo(id);
    setCharacter(response);
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
            {/* 
            <p>comics: {character.comics.available}</p>
            <p>series: {character.series.available}</p>
            <p>stories: {character.stories.available}</p>
            <p>events: {character.events.available}</p> */}
          </div>
        </div>
        <div className="comics"></div>
        <p>Comics: {character.comics.available}</p>
        {character.comics.items.map((item, index) => (
          <ExtraInfoDetail key={index} resourceURI={item.resourceURI} />
        ))}
      </main>
    </div>
  );
}
