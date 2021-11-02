import React from "react";
import styles from "../util/Loading.css";
const Loading = (props) => {
  return (
    <div className={styles.Loader} style={{ color: props.color }}>
      Loading..
    </div>
  );
};
export default Loading;
