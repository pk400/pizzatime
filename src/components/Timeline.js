import React from 'react'

import './Timeline.css'
import Point from './Point'

const Timeline = ({
  points,
  widthPercentage=100,
  trackColor="#333333",
  progressColor="#FF0000",
  pointColor="#333333",
  stepColor="#FF0000",
  currentStep,
  setCurrentStep
}) => {
  const progressWidth = currentStep > 0 ? ((currentStep) / (points.length - 1)) * 100 : 0
  const clickPoint = (i) => () => setCurrentStep(i)
  return (
    <div style={{margin: "0 auto", width: widthPercentage + "%"}}>
      <div className="timeline" style={{backgroundColor: trackColor}}>
        <div className="timeline-progress" style={{
          width: progressWidth + "%",
          backgroundColor: progressColor
        }}></div>
      </div>
      <div className="points">
        {points.map((point, i) =>
          <Point
            key={i}
            text={point}
            pointColor={pointColor}
            stepColor={stepColor}
            isStep={i < currentStep + 1}
            clickPoint={clickPoint(i)} /> )}
      </div>
    </div>
  )
}

export default Timeline
