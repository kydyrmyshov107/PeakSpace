import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInputLogin/CustomInput";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>main</main>
      <CustomButton children={undefined} />
      <CustomInput />

      <Footer />
    </div>
  );
};

export default Layout;
