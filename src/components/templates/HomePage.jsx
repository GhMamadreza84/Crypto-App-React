import styles from "./HomePage.module.css"

import Header from "../modules/Header";
import WelcomePage from "../modules/WelcomePage";

// Image 
import greenGradient from "../../assets/green-gradient.png"
import purpleGradient from "../../assets/purpleGradient.png"
import Btc from "../../assets/Bitcoin-1.png"
import LiteCoin from "../../assets/LiteCoin.png"
import Etherium from "../../assets/Etherium.png"
import Monero from "../../assets/Monero.png"
import star1 from "../../assets/star-img.png"
import star2 from "../../assets/star-img2.png"
import star3 from "../../assets/star-img3.png"
import sphereOrange from "../../assets/sphereOrange.png"
import sphereGray from "../../assets/sphereGray.png"
import spherePurple from "../../assets/spherePurple.png"
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WelcomePage />
      <img src={greenGradient} alt="" className={styles.greenGradient} />
      <img src={purpleGradient} alt="" className={styles.purpleGradient} />
      <img src={Btc} alt="" className={styles.btc} />
      <img src={LiteCoin} alt="" className={styles.LiteCoin} />
      <img src={Monero} alt="" className={styles.Monero} />
      <img src={Etherium} alt="" className={styles.Etherium} />
      <img src={star1} alt="" className={styles.star1} />
      <img src={star1} alt="" className={styles.star11} />
      <img src={star2} alt="" className={styles.star2} />
      <img src={star3} alt="" className={styles.star3} />
      <img src={sphereOrange} alt="" className={styles.sphereOrange} />
      <img src={sphereGray} alt="" className={styles.sphereGray} />
      <img src={spherePurple} alt="" className={styles.spherePurple} />
    </div>
  );
};

export default HomePage;
