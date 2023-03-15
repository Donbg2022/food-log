import { useState } from "react"
import Countdown from "./Countdown"

export default function Routine ({ selectedStretches }){
  const [isSelected, setIsSelected] = useState([])
  const handleClick = (index) => {
    setIsSelected([...isSelected, index])
    }

  return (    
    <div >
        {
        selectedStretches.map((stretches,index) => {
          return(
            <div onClick={() => handleClick(index)} style={{backgroundColor: isSelected.includes(index) ? 'green': 'blue'}} className="routine-card"key={stretches.name}>
              
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
