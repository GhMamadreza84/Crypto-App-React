import styles from "./SupportPage.module.css";

import StartBtn from "../modules/StartBtn";
const SupportPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h2>A crypto investment platform that invests in you </h2>
        <p>
          We invest more resources than any other platrom in making sure great
          support from real people is a click away, whenever you need it.
        </p>
        <StartBtn />
      </div>
      <div className={styles.section2}></div>
    </div>
  );
};

export default SupportPage;
