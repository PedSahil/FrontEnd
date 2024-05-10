import React from 'react'
import style from "./button.module.css"

const Button = ({text,onClick}) => {
  return (
    <div>
    <button onClick={onClick} className={style.button}>
      <span className={style.text}>{text}</span>
      <span>
        <img src="/Images/Arrow 1.png" alt="" />
      </span>
    </button>
  </div>
  )
}

export default Button
