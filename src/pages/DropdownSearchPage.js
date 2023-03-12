import { useState } from 'react'
import DropdownSearch from '../components/DropdownSearch'
import '../CSS/Dropdown.css'

function DropdownSearchPage() {

  const [selected, setSelected] = useState(null)
  const handleSelect = (option) => {
    setSelected(option)
  }
  const options = [
    {label: 'Neck', value: 'neck'},
    {label: 'Shoulders', value: 'shoulders'},
    {label: 'Bicep', value: 'Bicep'},
  ]

  return(
    <div>
      <DropdownSearch onChange={handleSelect} value={selected} options={options}/>
    </div>
  )
}


export default DropdownSearchPage