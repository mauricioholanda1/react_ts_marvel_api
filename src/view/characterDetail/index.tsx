import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import "./characterDetail.scss";
import { useEffect, useState } from "react";
import { getCharactersInfo } from "../../api/characters";

type CharacterParams = {
  id: string;
};

type CharacterProps = {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export default function CharacterDetail() {
  const params = useParams<CharacterParams>();
  const characterId = params.id;

  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    getCharactersInfo(characterId).then((data) => {
      setCharacter(data.results);
    });
  }, [characterId]);

  return (
    <div id="characterDetails-page">
      <Header />

      <main className="content">
        <h1>Character Details</h1>
        <p>Character ID: {characterId}</p>
        <p>Character Name: {character}</p>
      </main>
    </div>
  );
}
