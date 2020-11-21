import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://stadia.dev/static/images/logo/stadia-logo-mark.svg" />
    </header>
  );
};

export default Header;
