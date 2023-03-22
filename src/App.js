import DropdownSearchPage from "./pages/DropdownSearchPage"
import './CSS/App.css'
import RoutinePage from './pages/RoutinePage'
import Nav from "./components/Nav";
import { useState, useEffect } from "react"
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
  //state to render the stretches or the routine which user chooses (routine)
  const [selectedStretches, setSelectedStretches] = useState([])
  //state that determines if user should see dropdown or routine name form (dropdownsearch)
  const [displayRoutine, setDisplayRoutine] = useState(false)
  //hold routine name and passes it to setData DB (dropdownSearchPage)
  const [routineName, setRoutineName] = useState('')
  //state to render list of stretches after choosing muscle group from dropdown (dropdownSearchPage)
  const [stretchList, setStretchList] = useState([])
  //state to store which muscle group is selected (dropdownSearch)
  const [selected, setSelected] = useState(null)
  //state to save string of relative path to query db (dropdownSearchPage)
  const [selectedList, setSelectedList] = useState('')
  //routine name that user clicked on (SavedRoutine)
  const [clickedRoutine, setClickedRoutine] = useState('')
  //determines whether to show form to add routine name or dropdown menu (DropdownSearchPage)
  const [showSaveForm, setShowSaveForm] = useState(true)


  //nav & dropdownSearchPage
  const handleSave = () => {
    setShowSaveForm(!showSaveForm)
  }

  //dropdownSearchPage
  const handleSubmit = (e, userInput) => {
    e.preventDefault()
    setRoutineName(userInput)
    setDisplayRoutine(true)
  }

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

  const handleStretchSelect = (option) => {
    setSelected(option)
  }
  
  const queryDb = async() => {
  const querySnapshot = await getDocs(collection(db, selected));
    setStretchList(querySnapshot.docs.map((doc) => {
      console.log(doc.id)
      return {name: doc.id, directions: doc.data().directions}
    }))
  }

  //SaveRoutinePage

  function handleRoutineListClick(list, clickedItem){
    setSelectedList(list)
    setClickedRoutine(clickedItem)
  }
  const queryDbList = async() => {
    if(selectedList.length > 0){
      const querySnapshot = await getDocs(collection(db, selectedList));

      querySnapshot.docs.map((doc) => {
      if (clickedRoutine === doc.id){
        setSelectedStretches(doc.data().stretchArray.map((item) => {
          return {name: item.name, directions: item.directions}
        }))
      }
  })
}}

//watches for routine click to change then will run queryDbList to get stretches to display
  useEffect(()=> {
    queryDbList()
  }, [clickedRoutine])

    


 
  
  
  return (
    <Router>
      <Nav handleSave={handleSave} setSelectedStretches={setSelectedStretches}></Nav>
      <Routes>
        <Route path='/' element={<DropdownSearchPage handleSave={handleSave} showSaveForm={showSaveForm} routineNameSubmit={handleSubmit} routineName={routineName} handleListClick={handleListClick} displayRoutine={displayRoutine} handleStretchSelect={handleStretchSelect} queryDb={queryDb} stretchList={stretchList} selected={selected}/>}></Route>
        <Route path='/routine' element={<RoutinePage selectedStretches={selectedStretches} />}></Route>
        <Route path='/saved' element={<SavedRoutinePage handleRoutineListClick={handleRoutineListClick} queryDbList={queryDbList} selectedList={selectedList} clickedRoutine={clickedRoutine}/>}></Route>

      </Routes>

    </Router>
  )
}