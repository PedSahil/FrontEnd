import React, { Children } from "react";
import style from "./card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={style.card}>
      <div className={style.heading}>{title}</div>
      {children}
    </div>
  );
};

export default Card;
