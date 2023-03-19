import SavedRoutine from '../components/SavedRoutine'
import '../CSS/SavedRoutine.css'

export default function SavedRoutinePage({handleRoutineListClick, queryDbList, clickedRoutine}) {


  return (
    <SavedRoutine handleRoutineListClick={handleRoutineListClick} clickedRoutine={clickedRoutine}queryDbList={queryDbList}/>
  )
}