import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters";
import { Header } from "../../components/Header";
import "./home.scss";
import { useHistory } from "react-router-dom";

type CharacterProps = {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export default function Home() {
  const history = useHistory();

  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  const [nameChar, setNameChar] = useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  useEffect(() => {
    getCharacter();
  }, []);

  async function getCharacter(nameOrLetter: string = "") {
    const response = await getCharacters(nameOrLetter);
    setCharacters(response);
  }

  async function characterDetail(character: CharacterProps) {
    history.push(`/characterDetail/${character.id}`);
  }

  return (
    <div id="home-page">
      <main className="content">
        <div className="home-title">
          <h1>Search </h1>
          <input
            type="text"
            value={nameChar}
            onChange={(text) => setNameChar(text.target.value)}
          />
          <div className="alphabet-content">
            {alphabet.map((letter) => (
              <button onClick={() => getCharacter(letter)}>{letter}</button>
            ))}
          </div>
        </div>
        <div className="home-content">
          {characters.map((character, index) => {
            return (
              <button
                className="hero-card"
                key={character.id}
                onClick={() => characterDetail(character)}
              >
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                />
                <h3>{character.name}</h3>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
