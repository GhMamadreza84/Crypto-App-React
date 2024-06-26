import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import styles from "./Header.module.css";
const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const burgerOpenHandler = () => {
    setBurgerOpen(!burgerOpen);
  };
  const burgerCloseHandler = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
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
      </div>

      <div className={styles.openBurger} onClick={burgerOpenHandler}>
        {burgerOpen ? "" : <IoMenu />}
      </div>

      {burgerOpen ? (
        <div className={styles.burgerMenu}>
          <div className={styles.closeBurger} onClick={burgerCloseHandler}>
            <IoMdClose className={styles.closeBurgerBtn} />
          </div>

          <div className={styles.menuList}>
            <ul className={styles.list}>
              <li>Buy/Sell</li>
              <li>Grow</li>
              <li>Market</li>
              <li>Business</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.burgerButtons}>
            <button className={styles.login}>Sign in</button>
            <button className={styles.signup}>Sign up</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
