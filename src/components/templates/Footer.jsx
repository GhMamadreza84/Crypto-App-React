import { FaArrowRight } from "react-icons/fa6";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feedBack}>
        <h1>Receive transmissions</h1>
        <p>
          Unsubscribe at any time. <a href="#">Privacy policy ↗</a>
        </p>
        <div className={styles.input}>
          <input type="email" placeholder="Email Address" />
          <FaArrowRight className={styles.icon} />
        </div>
      </div>
      <div className={styles.footerContent}></div>
    </div>
  );
};

export default Footer;
