import styles from "./Footer.module.css";
import Input from "../modules/Input";
import greenGradient from "../../assets/green-gradient2.png"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feedBack}>
        <h1>Receive transmissions</h1>
        <p>
          Unsubscribe at any time. <a href="#">Privacy policy ↗</a>
        </p>
        <Input />
      </div>
      <hr />
      <div className={styles.footerContent}>
        <div className={styles.leftDiv}>
          <h1>COINFLIP</h1>
          <p>
            CoinFlip, the world's leading bitcoin ATM operator, makes it so
            flippin' easy to buy and sell bitcoin via cash, card, or bank
            transfer.{" "}
          </p>
          <p>
            Sign up to get the latest in CoinFlip news, discounts, and more.
          </p>
          <Input />
          <p>© 2024 Created With 💜 By Gh_Mamadreza</p>
        </div>
        <div className={styles.centerDiv}>
          <ul>
            <li>
              <h5>Company</h5>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Press</p>
            </li>
            <li>
              <p>News</p>
            </li>
            <li>
              <p>Merch</p>
            </li>
          </ul>
        </div>
        <div className={styles.rightDiv}>
        <ul>
            <li>
              <h5>Privacy Policy and Terms of Service</h5>
            </li>
            <li>
              <p>CoinFlip Privacy Policy</p>
            </li>
            <li>
              <p>CoinFlip Biometrics Privacy Policy</p>
            </li>
            <li>
              <p>CoinFlip Financial Privacy Notice</p>
            </li>
            <li>
              <p>CoinFlip Terms of Service</p>
            </li>
            <li>
              <p>CoinFlip Trade Desk Terms of Service</p>
            </li>
          </ul>
        </div>
      </div>
      <img src={greenGradient} alt="greenGradient" className={styles.greenGradient}/>
    </div>
  );
};

export default Footer;
