import SearchPage from "./pages/DropdownSearchPage"
import RoutinePage from './pages/RoutinePage'
import { useState } from "react"

export default function App() {
  const [selectedStretches, setSelectedStretches] = useState([])
  const [count, setCount] = useState(0)

  const handleListClick = (chosenStretch, stretchDirections) => {
    if(!selectedStretches.includes(chosenStretch)){
      setSelectedStretches([...selectedStretches, {name: chosenStretch, directions: stretchDirections}])
    }
  
  }

  const handleDirections = (directionArray) => {
    console.log(directionArray)  }

  return (
    <div>
      <SearchPage handleDirections={handleDirections} handleListClick={handleListClick}/>
      <RoutinePage count={count} selectedStretches={selectedStretches}/>
    </div>
  )
}