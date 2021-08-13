import { useEffect, useState } from "react";
import { getCharacters } from "../api/characters";

export function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter();
  }, []);

  async function getCharacter() {
    const response = await getCharacters();
    console.log(response);
    setCharacters(response);
  }

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
