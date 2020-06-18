import React, { useState } from 'react'

import './Circle.css'

const Circle = ({
  text="",
  color="#FFFFFF",
  diameter,
  borderWidth=0,
  borderColor,
  onClick,
  customStyles
}) => {
  const [isHover, setIsHover] = useState(false)
  const hoverColor = "#CCCCCC"
  const hoverHandler = () => setIsHover(!isHover)
  return <div className="circle" style={{
    backgroundColor: (isHover) ? hoverColor : color,
    width: diameter,
    height: diameter,
    borderWidth: borderWidth,
    borderColor: borderColor,
    lineHeight: diameter + "px",
    ...customStyles
    // backgroundImage: "radial-gradient(#212121 20%, #e53935 20%)",
  }}
  onMouseOver={hoverHandler}
  onMouseOut={hoverHandler}
  onClick={onClick}>{text}</div>
}

export default Circle
