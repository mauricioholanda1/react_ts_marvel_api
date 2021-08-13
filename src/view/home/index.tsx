import illustrationImg from "../../assets/images/marvel.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { useHistory } from "react-router-dom";
import "./home.scss";
import { useAuth } from "../../hooks/useAuth";

export default function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside></aside>
      <main>
        <div className="main-content">
          <img src={illustrationImg} alt="logo" width="60%" height="60%" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="logo google" />
            Entrar com Google
          </button>
        </div>
      </main>
    </div>
  );
}
