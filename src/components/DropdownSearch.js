import { useState, useRef, useEffect } from "react"
import { GoChevronDown } from 'react-icons/go';


function DropdownSearch ({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = (e) => {
    if (!divEl.current){
      return;
    }
    if (!divEl.current.contains(e.target)){
      setIsOpen(false)
    }
  }
  document.addEventListener('click', handler, true)

  return () => {
    document.removeEventListener('click', handler)
    }
  }, [])

  const handleDropdownClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    onChange(option)
    setIsOpen(false)
  }

  const renderedOptions = options.map((option) => {
    return(
      <div className="dropdown-options" key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>
    )
  }
)

  return (
    <div className="dropdown-container" ref={divEl}>
      <div className='dropdown-shape' onClick={handleDropdownClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className='chevron'/>
      </div>
      {isOpen && (
      <div>{renderedOptions}</div>
    )}
    </div>
  )
}

export default DropdownSearch

