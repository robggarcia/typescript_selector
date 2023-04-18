import React from "react";
import styles from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <>
      <div className="container">Wrong</div>
      <div className={styles.container}>Right</div>
    </>
  );
};

export default Select;
