import styles from "./SupportPage.module.css";

import StartBtn from "../modules/StartBtn";

import orangeGradient from "../../assets/orangeGradient.png";
import sphereOrange from "../../assets/sphereOrange.png";
import userIcon from "../../assets/user-icon.png";
import star2 from "../../assets/star-img2.png";
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
      <div className={styles.section2}>
        <div className={styles.images}>
          <img src={orangeGradient} alt="orangeGradient"  className={styles.img1}/>
          <img src={sphereOrange} alt="sphereOrange" className={styles.img2}/>
          <img src={userIcon} alt="userIcon" className={styles.img3}/>
          <img src={star2} alt="star2" className={styles.img4}/>
        </div>
        <div className={styles.title}></div>
      </div>
    </div>
  );
};

export default SupportPage;
