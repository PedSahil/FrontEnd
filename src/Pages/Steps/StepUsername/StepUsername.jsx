import React from 'react'
import style from "./username.module.css"

const StepUsername = ({onNext}) => {
  return (
    <div>
      <h2>Username</h2>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepUsername
