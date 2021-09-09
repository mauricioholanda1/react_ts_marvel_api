import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters";
import { Header } from "../../components/Header";
import "./home.scss";

type CharacterProps = {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export default function Home() {

  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    getCharacter();
  }, []);

  async function getCharacter() {
    const response = await getCharacters();
    console.log(response);
    setCharacters(response);
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
              <div key={character.id}>
                <span>{character.name}</span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
