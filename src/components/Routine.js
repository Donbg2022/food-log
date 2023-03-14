export default function Routine ({ selectedStretches, count }){
let i = -1
  return (      
    <div>
      {          
        selectedStretches.map((stretches) => {
          return(
            <div key={stretches.name}>
              {stretches.name}
              {stretches.directions}
            </div>
          )
        })
      }
    </div>
  )
}