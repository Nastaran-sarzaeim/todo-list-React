import React from "react";
import styles from "./footer.module.css";

function Footer({totalTodos ,completedTodos}) {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.item}>Completed : {completedTodos}</span>
        <span  className={styles.item}>Total : {totalTodos}</span>
      </div>
    </>
  );
}

export default Footer;
