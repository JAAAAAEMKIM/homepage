import { ButtonHTMLAttributes } from "react";
import styles from "./RoundButton.module.css";

interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RoundButton: React.FC<RoundButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default RoundButton;
