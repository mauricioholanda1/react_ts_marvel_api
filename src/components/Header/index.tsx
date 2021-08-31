import illustrationImg from "../../assets/images/marvel.svg";
import "./header.scss";
import { Button } from "../Button";

export function Header() {
  return (
    <header>
      <div className="content">
        <img src={illustrationImg} alt="marvel" />
        <div>
          <Button isOutlined>Logout</Button>
        </div>
      </div>
    </header>
  );
}
