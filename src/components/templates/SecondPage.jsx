import { FaArrowRight } from "react-icons/fa6";

import styles from "./SecondPage.module.css";
import tradeImage from "../../assets/trade.png";
import atmImage from "../../assets/atm.png";
import walletImage from "../../assets/wallet.png";
import star1 from "../../assets/star-img2.png";
import star2 from "../../assets/star-img3.png";

const SecondPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerDiv}>
        <div>
          <img src={tradeImage} alt="tradeImage" />
          <div className={styles.title}>
            <h2>Trade Desk</h2>
            <p>
              Invest in crypto anytime, anywhere with our safe, secure, and easy
              to use online platform
            </p>
            <a href="#">Get Started <FaArrowRight /></a>
          </div>
        </div>
        <div>
          <img src={atmImage} alt="atmImage" />
          <div className={styles.title}>
            <h2>CoinFlip ATMs</h2>
            <p>
              We have thousands of ATMs located across the U.S. where you can
              easily convert cash to crypto
            </p>
            <a href="#">Find an ATM <FaArrowRight /></a>
          </div>
        </div>
        <div>
          <img src={walletImage} alt="walletImage" />
          <div className={styles.title}>
            <h2>CoinFlip Wallet</h2>
            <p>
              Store your growing investments in our non-custodial wallet that
              gives you access to a full suite of DeFi services in one place
            </p>
            <a href="#">Download the App <FaArrowRight  /></a>
          </div>
        </div>
      </div>
      <img src={star1} alt="star1" />

      <img src={star2} alt="star2" />
    </div>
  );
};

export default SecondPage;
