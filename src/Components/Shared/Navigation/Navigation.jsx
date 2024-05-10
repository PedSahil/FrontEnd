import React from 'react'
import { Link } from 'react-router-dom'
import style from "./navigation.module.css"

const Navigation = () => {
 
  return (
    <div>
      <nav className={`${style.navbar} container`}>
        <Link className={style.logoStyle} to='/'>
          <img className={style.logo} src="/Images/logo.png" alt="" />
          <span>Coder's House</span>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
