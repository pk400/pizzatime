import React from 'react'

import './Point.css'

const Point = ({text, pointColor, stepColor, isStep, clickPoint}) => {
  const styles = {
    backgroundColor: isStep ? stepColor : pointColor
  }
  return (
    <div className={isStep ? "point step" : "point"} onClick={clickPoint}>
      <div className="dot" style={styles}></div>
      <span>{text}</span>
    </div>
  )
}

export default Point
