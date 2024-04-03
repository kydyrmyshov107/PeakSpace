import { FC, ReactNode } from "react";
import scss from './WriteButton.module.scss'

interface WriteButton {
	children: ReactNode;
}
const WriteButton: FC<WriteButton> = ({ children }) => {
	return (
		<>
		<button className={scss.button}>{children}</button>
		</>
	);
};

export default WriteButton;
