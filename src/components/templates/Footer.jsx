import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feedBack}>
        <h1>Receive transmissions</h1>
        <p>
          Unsubscribe at any time. <a href="#">Privacy policy ↗</a>
        </p>
        <input type="email" placeholder="Email Address" />
      </div>
      <div className={styles.footerContent}></div>
    </div>
  );
};

export default Footer;
