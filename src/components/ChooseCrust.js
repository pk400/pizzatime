import React from 'react'

import Circle from './Circle'

const ChooseCrust = ({
  setPizza
}) => {
  return (
    <div>
      <Circle
        text="Regular"
        diameter={100}
        borderColor="#C0A171"
        borderWidth={10}
        onClick={() => setPizza(10)} />
      <Circle
        text="Thin"
        diameter={100}
        borderColor="#C0A171"
        borderWidth={5}
        onClick={() => setPizza(5)} />
      <Circle
        text="Thick"
        diameter={100}
        borderColor="#C0A171"
        borderWidth={15}
        onClick={() => setPizza(15)} />
    </div>
  )
}

export default ChooseCrust
