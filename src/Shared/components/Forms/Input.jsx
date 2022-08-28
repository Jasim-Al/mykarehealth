import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className={styles.Input}
    />
  );
};

export default Input;
