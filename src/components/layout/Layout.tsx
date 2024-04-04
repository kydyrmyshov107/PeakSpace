import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
// import CustomButton from "../UI/buttons/";
import CustomInput from "../UI/CustomInputLogin/CustomInputLogin";
import CancelButton from "../UI/buttons/cancelButton/CancelButton";

import WriteButton from "../UI/buttons/writeButton/WriteButton";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>main</main>
      <CustomInput />
      {/* <CustomButton children={"Войти "} /> */}

      <CancelButton children={"Сохранить"} />

      <WriteButton children={"Написат"} />
      <Footer />
    </div>
  );
};

export default Layout;
