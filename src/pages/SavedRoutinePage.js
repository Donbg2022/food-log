import SavedRoutine from '../components/SavedRoutine'
import '../CSS/SavedRoutine.css'
import { useEffect } from 'react'

export default function SavedRoutinePage({handleRoutineListClick, queryDbList, clickedRoutine}) {


  return (
    <SavedRoutine handleRoutineListClick={handleRoutineListClick} clickedRoutine={clickedRoutine} queryDbList={queryDbList}/>
  )
}