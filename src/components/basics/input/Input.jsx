import { forwardRef } from "react";
import styles from "./Input.module.css";

export default forwardRef(function Input({ name, ...inputProps }, ref) {
  return (
    <label className={styles.container_input}>
      <p>{name}</p>
      <input ref={ref} {...inputProps}></input>
    </label>
  );
});
