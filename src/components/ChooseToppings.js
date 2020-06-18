import React from 'react'

import Circle from './Circle'

const ChooseToppings = ({
  setPizza
}) => {
  const diameter = 100
  return (
    <div>
      <Circle
        text="Pepperoni"
        color="#FFFFFF"
        diameter={diameter}
        onClick={() => setPizza(0)}
        customStyles={{
          backgroundImage: "radial-gradient(#ED5555 20%, transparent 20%), radial-gradient(#ED5555 20%, transparent 20%)",
          backgroundColor: "#FFFFF",
          backgroundPosition: `0 0, 25px 25px`,
          backgroundSize: "50px 50px"
        }} />
      <Circle
        text="Green Pepper"
        color="#FFFFFF"
        diameter={diameter}
        onClick={() => setPizza(1)}
        customStyles={{
          backgroundImage: "radial-gradient(#278310 20%, transparent 20%), radial-gradient(#278310 20%, transparent 20%)",
          backgroundColor: "#FFFFF",
          backgroundPosition: `0 0, 25px 25px`,
          backgroundSize: "50px 50px"
        }} />
      <Circle
        text="Pineapple"
        color="#FFFFFF"
        diameter={diameter}
        onClick={() => setPizza(2)}
        customStyles={{
          backgroundImage: "radial-gradient(#D5C007 20%, transparent 20%), radial-gradient(#D5C007 20%, transparent 20%)",
          backgroundColor: "#FFFFF",
          backgroundPosition: `0 0, 25px 25px`,
          backgroundSize: "50px 50px"
        }} />
    </div>
  )
}

export default ChooseToppings
