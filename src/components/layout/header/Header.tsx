import FirstImg from "../../../assets/firstMan.svg";
import PlusImg from "../../../assets/Plusicon.svg";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <header>
      <img src={FirstImg} alt="" />
      <img className={scss.Plus} src={PlusImg} alt="" />
    </header>
  );
};

export default Header;
