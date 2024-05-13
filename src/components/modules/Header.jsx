import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>
        <h3>COINFLIP</h3>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>Buy/Sell</li>
          <li>Grow</li>
          <li>Market</li>
          <li>Business</li>
          <li>Support</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.login}>Sign in</button>
        <button className={styles.signup}>Sign up</button>
      </div> */}
      <header className="header">
        <div className="logo">Your Logo</div>
        <div className="nav">
          <ul>
            <li>Buy/Sell</li>
            <li>Grow</li>
            <li>Market</li>
            <li>Business</li>
            <li>Support</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
