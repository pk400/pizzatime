import React from 'react'

import Circle from './Circle'

const Result = ({
  pizza
}) => {
  let toppings
  switch (pizza.toppings) {
    case 1:
      toppings = "radial-gradient(#278310 20%, transparent 20%), radial-gradient(#278310 20%, transparent 20%)"
      break
    case 2:
      toppings = "radial-gradient(#D5C007 20%, transparent 20%), radial-gradient(#D5C007 20%, transparent 20%)"
      break
    default:
      toppings = "radial-gradient(#ED5555 20%, transparent 20%), radial-gradient(#ED5555 20%, transparent 20%)"
      break
  }
  return (
    <div>
      <Circle
        color={pizza.sauce}
        borderWidth={pizza.crust}
        borderColor={pizza.dough}
        diameter={100}
        customStyles={{
          backgroundImage: toppings,
          backgroundPosition: `0 0, 25px 25px`,
          backgroundSize: "50px 50px"
        }} />
    </div>
  )
}

export default Result
