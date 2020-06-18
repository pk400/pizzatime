import React from 'react'

import Circle from './Circle'

const ChooseDough = ({
  setPizza
}) => {
  return (
    <div>
      <Circle
        text="Regular"
        color="#FFDC82"
        diameter={100}
        borderColor="#00FF00"
        onClick={() => setPizza("#FFDC82")} />
      <Circle
        text="Whole Wheat"
        color="#CBB889"
        diameter={100}
        borderColor="#00FF00"
        onClick={() => setPizza("#CBB889")} />
      <Circle
        text="Carbone"
        color="#656259"
        diameter={100}
        borderColor="#00FF00"
        onClick={() => setPizza("#656259")} />
    </div>
  )
}

export default ChooseDough
