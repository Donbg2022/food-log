import { useState, useEffect } from 'react'
import DropdownSearch from '../components/DropdownSearch'
import '../CSS/Dropdown.css'
import { Link } from "react-router-dom"




function DropdownSearchPage({ handleListClick, routineNameSubmit, displayRoutine, queryDb, handleStretchSelect, stretchList, selected }) {

useEffect(() => {
    if(selected === null){
      return
    }else{
      queryDb()
    }
}, [selected])


  const options = [
    {label: 'Neck', value: 'neck'},
    {label: 'Shoulders', value: 'shoulders'},
    {label: 'Bicep', value: 'bicep'},
  ]

  let tempRoutineName = ''
  const handleChange = (e) => {
    tempRoutineName = e.target.value
  }

  return(
    <div>
      <DropdownSearch handleStretchSelect={handleStretchSelect} value={selected} options={options} displayRoutine={displayRoutine}/>
      <div className='stretch-list-wrapper'>
        {stretchList.map((stretch) => {
        return (
          <p key={stretch.name} onClick={() => handleListClick(stretch.name, stretch.directions)} className='stretch-list'>{stretch.name}</p>
        )
      })}
      </div>
      
      <form action="" onSubmit={(e) => routineNameSubmit(e, tempRoutineName)}>
        <input type="text" onChange={handleChange}/>
        <div className='button-wrapper'>
          <Link to='/routine'><button className='save-button'>Start Routine</button></Link>
        </div>
        <button  type="submit" >sdrgth</button>
      </form>
    </div>
  )
}


export default DropdownSearchPage