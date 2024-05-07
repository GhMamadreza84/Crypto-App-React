import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feedBack}>
        <h1></h1>
        <p></p>
        <input type="email" placeholder="Email Address" />
      </div>
      <div className={styles.footerContent}></div>
    </div>
  );
};

export default Footer;
