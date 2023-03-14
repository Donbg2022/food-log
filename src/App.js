import SearchPage from "./pages/DropdownSearchPage"
import RoutinePage from './pages/RoutinePage'
import Nav from "./components/Nav";
import { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const [selectedStretches, setSelectedStretches] = useState([])

  const handleListClick = (chosenStretch, stretchDirections) => {
    if(!selectedStretches.includes(chosenStretch)){
      setSelectedStretches([...selectedStretches, {name: chosenStretch, directions: stretchDirections}])
    }
  
  }

  const handleDirections = (directionArray) => {
    console.log(directionArray)  }

  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<SearchPage handleDirections={handleDirections} handleListClick={handleListClick}/>}></Route>
        <Route path='/routine' element={<RoutinePage selectedStretches={selectedStretches} />}></Route>
      </Routes>
     {/* <RoutinePage selectedStretches={selectedStretches} /> */}

    </Router>
  )
}