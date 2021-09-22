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

  useEffect(() => {
    getCharacter();
  }, []);

  async function getCharacter() {
    const response = await getCharacters();
   
    setCharacters(response);
  }

  async function characterDetail(character: CharacterProps) {

    history.push(`/characterDetail/${character.id}`);
  }

  return (
    <div id="home-page">
      <Header />
      <main className="content">
        <div className="home-title">
          <h1>Characters</h1>
          <h1> Search bar</h1>
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
