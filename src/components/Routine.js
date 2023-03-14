import { useState } from "react"
import Countdown from "./Countdown"

export default function Routine ({ selectedStretches }){

  const handleClick = () => {
    }

  return (    
    <div >
        {
        selectedStretches.map((stretches) => {
          return(
            <div className="routine-card"key={stretches.name}>
              
            <h1 className="stretch-title" key={stretches.name}>{stretches.name}</h1>
              {stretches.directions.map((direction)=> {
                return <p key={direction.length} className="stretch-directions">{direction}</p>
            })}
            <Countdown />

            </div>
        )})}
    </div>
  )
}


//add if statement or something so you cant repeat stretches if clicked more then once
