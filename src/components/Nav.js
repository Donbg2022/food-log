import { Link } from "react-router-dom"
import '../CSS/Nav.css'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Nav({setSelectedStretches}){
  const [openMenu, setOpenMenu] = useState(false)
  function handleClick(){
    setSelectedStretches([])
  }

  const handleNavClick = () => {
    setOpenMenu(!openMenu)
  }

  const NavLinks = () => {
    return(
      <>
        <ul className="links-list">
          <li><Link to='/'>Home</Link></li>
          <li onClick={handleClick}><Link to='/search'>Create</Link></li>
          <li><Link to='/routine'>Routine</Link></li>
          <li><Link to='/saved'>Saved</Link></li>
        </ul>
      </>
    )
  }

  return (
    <div>
      <nav className="nav">
        <h1 className="logo"><Link to='/'>STRETCHIT!</Link></h1>
        <AiOutlineMenu className="burger" onClick={handleNavClick}/>
        {openMenu? <NavLinks />: null}
      </nav>
    </div>
  )
}