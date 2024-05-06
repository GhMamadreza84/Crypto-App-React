import StartBtn from "../modules/StartBtn";
import styles from "./InvestPage.module.css";
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
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default InvestPage;
