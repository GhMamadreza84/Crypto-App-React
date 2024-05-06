import StartBtn from "../modules/StartBtn";
import styles from "./InvestPage.module.css";

import purpleGradient from "../../assets/purpleGradient2.png";
import bagIcon from "../../assets/bag-icon.png";
const InvestPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Take your first step into safe, secure crypto investing</h2>
        <p>
          Separated they live in Bookmarks right at the coast of the famous
          Semantics, large language ocean Separated they live in Bookmarks right
          at the coast.
        </p>
        <StartBtn />
      </div>
      <div className={styles.content}>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <img src={purpleGradient} alt="purpleGradient" />
    </div>
  );
};

export default InvestPage;
