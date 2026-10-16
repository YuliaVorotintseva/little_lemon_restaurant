import styles from "./Button.module.css";

export const Button = ({ text, onClick }) => (
  <button
    className={styles.main_btn}
    onClick={onClick}
  >
    {text}
  </button>
)