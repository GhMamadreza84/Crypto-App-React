import styles from "./WelcomePage.module.css";
const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>We make crypto <br /> clear and simple</h1>
        <p>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated <br /> to every trader at every level.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomePage;
