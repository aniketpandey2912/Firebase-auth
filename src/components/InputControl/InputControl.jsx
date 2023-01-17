import React from "react";
import styles from "./InputControl.module.css";

const InputControl = (props) => {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default InputControl;
