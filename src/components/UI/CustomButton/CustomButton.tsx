import { FC, ReactNode } from "react";
import scss from "./CustomButton.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const CustomButton: FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className={scss.button}>{children}</button>
    </>
  );
};

export default CustomButton;
