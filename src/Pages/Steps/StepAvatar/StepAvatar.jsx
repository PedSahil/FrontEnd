import React from 'react'
import style from './avatar.module.css'
const StepAvatar = ({onNext}) => {
  return (
    <div>
      <h2>Stepavatar</h2>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepAvatar
