import CancelButton from "../UI/buttons/cancelButton/CancelButton";
import CustomButton from "../UI/buttons/customButton/CustomButton";
import WriteButton from "../UI/buttons/writeButton/WriteButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>main</main>
			<CustomButton children={"Войти "} />

			<CancelButton children={"Сохранить"} />

			<WriteButton children={"Написат"} />
			<Footer />
		</div>
	);
};

export default Layout;
