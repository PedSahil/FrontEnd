import React from 'react'
import style from "./phoneEmail.module.css"

const StepPhoneEmail = ({onNext}) => {
  return (
    <div>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepPhoneEmail
