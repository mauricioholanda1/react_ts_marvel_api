import illustrationImg from "../../assets/images/marvel.svg";
import "./header.scss";
import { Button } from "../Button";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Body() {
  const history = useHistory();
  const { signOut } = useAuth();

  async function logout() {
    await signOut();
    history.push("/");
  }

  return (
    <header>
      <div className="content">
        <img
          src={illustrationImg}
          alt="marvel"
          onClick={() => history.push("/home")}
        />
        <div>
          <Button onClick={logout} isOutlined>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
