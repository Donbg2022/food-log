export default function Routine ({ selectedStretches, count }){
      console.log(selectedStretches)  

  
  return (    
    <div>
      {          
        selectedStretches.map((stretches) => {
          return(
            <div key={stretches.name}>
              {stretches.name}
              
              {stretches.directions.map((direction)=> {
                return <p>{direction}</p>
              })}
            </div>
          )
        })
      }
    </div>
  )
}