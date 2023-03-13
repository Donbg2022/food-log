import Routine from '../components/Routine'

export default function RoutinePage({ selectedStretches, directions }){

  return(
    <Routine directions={directions} selectedStretches={selectedStretches}/>
  )
}