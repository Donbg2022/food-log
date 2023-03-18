import DropdownSearchPage from "./pages/DropdownSearchPage"
import './CSS/App.css'
import RoutinePage from './pages/RoutinePage'
import Nav from "./components/Nav";
import { useState } from "react"
import SavedRoutinePage from './pages/SavedRoutinePage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import {db}  from "./firebase/Firebase-config";
import { collection, getDocs } from "firebase/firestore"; 



export default function App() {
  const [selectedStretches, setSelectedStretches] = useState([])
  const [displayRoutine, setDisplayRoutine] = useState(false)
  const [routineName, setRoutineName] = useState('')
  const [stretchList, setStretchList] = useState([])
  const [selected, setSelected] = useState(null)
  const [selectedList, setSelectedList] = useState('')
  const [clickedRoutine, setClickedRoutine] = useState('')


  const handleStretchSelect = (option) => {
    setSelected(option)
  }

  function handleRoutineListClick(list, clickedItem){
    setSelectedList(list)
    setClickedRoutine(clickedItem)
  }

  const queryDb = async() => {
    const querySnapshot = await getDocs(collection(db, selected));
    console.log(selected)
    
      setStretchList(querySnapshot.docs.map((doc) => {
        console.log(doc.id)
        return {name: doc.id, directions: doc.data().directions}
      }))
    }

    const queryDbList = async() => {
      if(selectedList.length > 0){
        console.log(selectedList)

        const querySnapshot = await getDocs(collection(db, selectedList));

        console.log('runnning')

        // setStretchList(querySnapshot.docs.map((doc) => {

        //   return {name: doc.id, directions: doc.data().directions}
        // }))

        querySnapshot.docs.map((doc) => {
          if (clickedRoutine === doc.id){
            console.log(doc.id)
            console.log(doc.data().directions)
            setStretchList(doc.data().stuff.map((item) => {
                return {name: item.name, directions: item.directions}
              }))
          }
            
        
      })
      }}
    console.log(stretchList)


  const handleListClick = async (chosenStretch, stretchDirections) => {
    if(selectedStretches.some((val)=> val.name === chosenStretch)){
      return;
    }else{
      setSelectedStretches([...selectedStretches, {name: chosenStretch, directions: stretchDirections}])

      await setDoc(doc(db, "/Routines/donovan/saved-routines", routineName), {
        stretchArray: [...selectedStretches, {name: chosenStretch, directions: stretchDirections}]}
      );
    }
  }
  
  const handleSubmit = (e, userInput) => {
    e.preventDefault()
    setRoutineName(userInput)
    setDisplayRoutine(true)
  }
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<DropdownSearchPage routineNameSubmit={handleSubmit} routineName={routineName} handleListClick={handleListClick}displayRoutine={displayRoutine} handleStretchSelect={handleStretchSelect} queryDb={queryDb} stretchList={stretchList} selected={selected}/>}></Route>
        <Route path='/routine' element={<RoutinePage selectedStretches={selectedStretches} />}></Route>
      </Routes>
     {/* <RoutinePage selectedStretches={selectedStretches} /> */}
    <SavedRoutinePage handleRoutineListClick={handleRoutineListClick} queryDbList={queryDbList} selectedList={selectedList}/>
    </Router>
  )
}