import { FC, ReactNode } from "react";
import scss from './CancelButton.module.scss'
interface CancelButtonProps {
	children: ReactNode;
}

const CancelButton: FC<CancelButtonProps> = ({ children }) => {
	return (
		<>
			<button className={scss.button}> {children}</button>
		</>
	);
};

export default CancelButton;
