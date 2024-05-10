import React from 'react'
import style from "./name.module.css"

const StepName = ({onNext}) => {
  return (
    <div>
      <h2>Stepname</h2>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepName
