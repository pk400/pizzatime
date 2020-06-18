import React from 'react'

import Circle from './Circle'

const ChooseSauce = ({
  setPizza
}) => {
  return (
    <div>
      <Circle
        text="Tomato"
        color="#950606"
        diameter={100}
        borderColor="#FFDC82"
        borderWidth={15}
        onClick={() => setPizza("#950606")} />
      <Circle
        text="Pesto"
        color="#65874A"
        diameter={100}
        borderColor="#FFDC82"
        borderWidth={15}
        onClick={() => setPizza("#65874A")} />
    </div>
  )
}

export default ChooseSauce
