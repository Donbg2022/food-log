import { useState, useEffect } from 'react'
import DropdownSearch from '../components/DropdownSearch'
import '../CSS/Dropdown.css'
import { Link } from "react-router-dom"




function DropdownSearchPage({ handleSave, showSaveForm, handleListClick, routineNameSubmit, displayRoutine, queryDb, handleStretchSelect, stretchList, selected }) {

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

  const ShowForm = () => {
    return (
      <form action="" onSubmit={(e) => routineNameSubmit(e, tempRoutineName)}>
        <input placeholder='New Routine Name' className='stretch-input' type="text" onChange={handleChange}/>
        <div className='button-wrapper'>
        </div>
        <button onClick={handleSave} className='stretch-name-button'type="submit" >Save Routine Name</button>
      </form>
    )
  }

  const ShowSave = () => {
    return <Link to='/routine' onClick={handleSave}><button className='save-button'>Start Routine</button></Link>

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
      <div className='form-wrapper'>
        {showSaveForm? <ShowForm />: <ShowSave />}
      </div>


    </div>
  )
}

export default DropdownSearchPage
 