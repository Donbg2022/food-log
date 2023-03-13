import SearchPage from "./pages/DropdownSearchPage"
import RoutinePage from './pages/RoutinePage'
import { useState } from "react"

export default function App() {
  const [selectedStretches, setSelectedStretches] = useState([])
  const handleListClick = (chosenStretch) => {
    if(!selectedStretches.includes(chosenStretch)){
      setSelectedStretches([...selectedStretches, chosenStretch])
    }
  }

  return (
    <div>
      <SearchPage handleListClick={handleListClick}/>
      <RoutinePage selectedStretches={selectedStretches}/>
    </div>
  )
}