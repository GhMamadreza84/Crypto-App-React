import styles from "./Input.module.css"
const Input = () => {
  return (
    <div className={styles.input}>
      <input type="email" placeholder="Email Address" />
      <FaArrowRight className={styles.icon} />
    </div>
  );
};

export default Input;
