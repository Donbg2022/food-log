export default function Routine ({ selectedStretches, directions, count }){
console.log(directions)
let i = -1
  return (      
    <div>
      {          
        selectedStretches.map((stretch) => {
          
          i++
          console.log(directions[3])
          return (<div key={stretch}>
          <div>{stretch}</div>
          <div>{directions[i]}</div>
          </div>
          )
        })
      }
    </div>
  )
}