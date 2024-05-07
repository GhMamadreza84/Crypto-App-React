import styles from "./Input.module.css";
import { FaArrowRight } from "react-icons/fa6";

const Input = () => {
  return (
    <div className={styles.input}>
      <input type="email" placeholder="Email Address" />
      <FaArrowRight className={styles.icon} />
    </div>
  );
};

export default Input;
