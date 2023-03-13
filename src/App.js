import SearchPage from "./pages/DropdownSearchPage"
import RoutinePage from './pages/RoutinePage'
import { useState } from "react"

export default function App() {
  const [selectedStretches, setSelectedStretches] = useState([])
  const [directions, setDirections] = useState([])
  const [count, setCount] = useState(0)

  const handleListClick = (chosenStretch) => {

        setCount(count + 1)

    if(!selectedStretches.includes(chosenStretch)){
      setSelectedStretches([...selectedStretches, chosenStretch])
    }
  
  }

  const handleDirections = (directionArray) => {
    console.log(directionArray)
    setDirections(directionArray)
  }

  return (
    <div>
      <SearchPage handleDirections={handleDirections} handleListClick={handleListClick}/>
      <RoutinePage count={count} directions={directions} selectedStretches={selectedStretches}/>
    </div>
  )
}