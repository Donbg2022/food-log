import Routine from '../components/Routine'
import '../CSS/RoutinePage.css'

export default function RoutinePage({ selectedStretches, directions }){

  return(
    <Routine selectedStretches={selectedStretches}/>
  )
}