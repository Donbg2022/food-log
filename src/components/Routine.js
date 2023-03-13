export default function Routine ({selectedStretches}){

  return (
    <div>
      {
        selectedStretches.map((stretch) => {
          return <div>{stretch}</div>
        })
      }
    </div>
  )
}