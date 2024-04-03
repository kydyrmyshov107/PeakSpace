import CustomInput from "../UI/CustomInputLogin/CustomInput";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        main
        <CustomInput />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
