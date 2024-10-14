import styles from "./Select.module.css";

import React from "react";

const Select = ({
  name,
  listElements = [],
  elementSelected,
  size,
  ...props
}) => {
  return (
    <label
      style={{ width: `${isNaN(size) ? 50 : size}%` }}
      className={styles.container_select}
    >
      <p>{name}</p>
      <select {...props}>
        <option>-selecciona-</option>
        {listElements.map(({ id, nameOption, ...restProps }) => (
          <option key={id} {...restProps} selected={id === elementSelected?.id}>
            {nameOption}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
