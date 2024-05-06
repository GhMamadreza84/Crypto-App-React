import StartBtn from "../modules/StartBtn";
import styles from "./InvestPage.module.css";
const InvestPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Take your first step into safe, secure crypto investing</h2>
        <p></p>
        <StartBtn />
      </div>
    </div>
  );
};

export default InvestPage;
