import SavedRoutine from '../components/SavedRoutine'
import '../CSS/SavedRoutine.css'

export default function SavedRoutinePage({handleRoutineListClick, queryDbList, selectedList}) {


  return (
    <SavedRoutine handleRoutineListClick={handleRoutineListClick} selectedList={selectedList}queryDbList={queryDbList}/>
  )
}