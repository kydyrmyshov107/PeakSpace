import CustomButton from "../UI/CustomButton/CustomButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<CustomButton children={"Login"} />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
