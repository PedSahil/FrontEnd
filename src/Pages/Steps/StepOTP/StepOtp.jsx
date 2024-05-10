import React from 'react'
import style from "./otp.module.css"
const StepOtp = ({onNext}) => {
  return (
    <div>
      <h2>This otp page</h2>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepOtp
