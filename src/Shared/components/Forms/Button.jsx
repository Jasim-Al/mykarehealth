import cx from "classnames";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={cx(
        styles.Button,
        { [styles.Button__Inverse]: props.inverse },
        { [styles.Button__Anime]: props.anime }
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
