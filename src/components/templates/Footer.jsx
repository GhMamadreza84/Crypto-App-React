import styles from "./Footer.module.css";
import Input from "../modules/Input";
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
          <p>© 2024 Created With 💙 By Gh_Mamadreza</p>
        </div>
        <div className={styles.centerDiv}>
          <ul>
            <li>
              <h1>Company</h1>
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
        <div className={styles.rightDiv}></div>
      </div>
    </div>
  );
};

export default Footer;
