import React from "react";
import winampImg from "../winamp.svg";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles}>
      Change
      <img src={winampImg} />
    </div>
  );
};
