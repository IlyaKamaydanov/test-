import { Button } from "../Button/Index";
import { Navigation } from "../Navigation/Index";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Button title="Connect Wallet" variant="header" />
    </div>
  );
};

export { Header };
