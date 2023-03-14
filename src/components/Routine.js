export default function Routine ({ selectedStretches, count }){
      console.log(selectedStretches)  

  return (    
    <div>
        {
        selectedStretches.map((stretches) => {
          return(
            <div>
              
            <h1 className="stretch-title" key={stretches.name}>{stretches.name}</h1>
              {stretches.directions.map((direction)=> {
                return <p className="stretch-directions">{direction}</p>
            })}
            </div>
        )})}
    </div>
  )
}


//add if statement or something so you cant repeat stretches if clicked more then once
