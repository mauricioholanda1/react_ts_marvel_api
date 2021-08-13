import { useEffect, useState } from "react";
import { getCharacters } from "../../api/characters";
import illustrationImg from "../../assets/images/marvel.svg";
import { Button } from "../../components/Button/index";
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
  function logout() {
    console.log("logout");
  }

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
      <header>
        <div className="content">
          <img src={illustrationImg} alt="marvel" />
          <div>
            <Button isOutlined onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

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
