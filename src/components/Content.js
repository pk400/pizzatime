import React, { useState } from 'react'

import Button from './Button'
import ChooseDough from './ChooseDough'
import ChooseCrust from './ChooseCrust'
import ChooseSauce from './ChooseSauce'
import ChooseToppings from './ChooseToppings'
import Result from './Result'
import Timeline from './Timeline'

const Content = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [pizza, setPizza] = useState({
    dough: "#FFDC82",
    crust: 10,
    sauce: "#950606",
    toppings: 0
  })
  const steps = [
    <ChooseDough setPizza={(dough) => setPizza({...pizza, dough: dough})} />,
    <ChooseCrust setPizza={(crust) => setPizza({...pizza, crust: crust})} />,
    <ChooseSauce setPizza={(sauce) => setPizza({...pizza, sauce: sauce})} />,
    <ChooseToppings setPizza={(toppings) => setPizza({...pizza, toppings: toppings})} />
  ]
  const nextButtonClick = () => {
    setCurrentStep(currentStep + 1)
  }
  const reset = () => {
    setPizza({
      dough: "#FFDC82",
      crust: 10,
      sauce: "#950606",
      toppings: 0
    })
    setCurrentStep(0)
  }
  let button
  if (currentStep === steps.length - 1) {
    button = <Button text="Done!" onClick={nextButtonClick} />
  }
  else if (currentStep === steps.length) {
    button = <Button text="Reset!" onClick={reset} />
  }
  else {
    button = <Button text="Next" onClick={nextButtonClick} />
  }
  return (
    <div style={{textAlign: "center"}}>
      <Timeline
        points={["Dough", "Crust", "Sauce", "Toppings"]}
        widthPercentage={40}
        currentStep={(currentStep > steps.length - 1) ? steps.length - 1: currentStep}
        setCurrentStep={setCurrentStep}
        />
      {(currentStep === steps.length) ? <Result pizza={pizza} /> : steps[currentStep]}
      {button}
    </div>
  )
}

export default Content
