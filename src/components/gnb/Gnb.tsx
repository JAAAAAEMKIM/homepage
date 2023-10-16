import { FaGithub } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import DarkModeButton from "@/components/dark-mode-button/DarkModeButton";
import LanguageSelect from "@/components/language-select/LanguageSelect";
import RoundButton from "@/components/round-button/RoundButton";
import styles from "./Gnb.module.css";

const Gnb = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.gnbContents}>
        <div className={styles.logo}>
          <FaHouse size="24" />
          JAEMIN KIM
        </div>
        <div className={styles.toolbar}>
          <RoundButton>
            <FaGithub size="16" />
          </RoundButton>
          <LanguageSelect />
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};

export default Gnb;
