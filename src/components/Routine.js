export default function Routine ({ selectedStretches, count }){
      console.log(selectedStretches)  

  return (    
    <div>
        {
        selectedStretches.map((stretches) => {
          return(
            <div>
            <h1 key={stretches.name}>{stretches.name}</h1>
              {stretches.directions.map((direction)=> {
                return <p>{direction}</p>
            })}
            </div>
        )})}
    </div>
  )
}
