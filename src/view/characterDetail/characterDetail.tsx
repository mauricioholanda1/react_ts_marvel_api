import { Header } from "../../components/Header";
import { useParams, useHistory } from "react-router-dom";
import "./characterDetail.scss";
import { useEffect, useState } from "react";
import { getCharactersInfo } from "../../api/characters";
// import ExtraInfoDetail from "./components/extraInfoDetails/extraInfoDetails";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { LoremIpsumText } from "../../components/DefaultTexts";

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
  const history = useHistory();
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
    <>
      <div id="characterDetails-page">
        <button className="button-go-back " onClick={history.goBack}>
          <img src={arrowLeft} alt="voltar" />
        </button>
        <main className="content">
          <div className="chart-info">
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
            />
            <div className="infos">
              <h1 className="name">{character.name}</h1>
              <p className="description">
                {character.description ? character.description : LoremIpsumText}
              </p>
              <h4>Extra data</h4>
              <p className="extra-data">Comics: {character.comics.available}</p>
              <p className="extra-data">Series: {character.series.available}</p>
              <p className="extra-data">
                Stories: {character.stories.available}
              </p>
              <p className="extra-data">Events: {character.events.available}</p>
            </div>
          </div>
          <div className="comics"></div>
          {/* <p>Comics: {character.comics.available}</p>
        {character.comics.items.slice(0, 5).map((item, index) => (
          <ExtraInfoDetail key={index} resourceURI={item.resourceURI} />
        ))} */}
        </main>
      </div>
    </>
  );
}
