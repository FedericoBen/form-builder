import { forwardRef } from "react";
import styles from "./Input.module.css";

export default forwardRef(function Input({ name, size, ...inputProps }, ref) {
  return (
    <label
      style={{ width: `${isNaN(size) ? 50 : size}%` }}
      className={styles.container_input}
    >
      <p>{name}</p>
      <input ref={ref} {...inputProps}></input>
    </label>
  );
});
