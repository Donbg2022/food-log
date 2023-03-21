import { Link } from "react-router-dom"
import '../CSS/Nav.css'

export default function Nav({setSelectedStretches}){

  function handleClick(){
    setSelectedStretches([])
  }
  return (
    <div>
      <nav className="nav">
        <h1 className="logo"><Link to='/'>STRETCHIT!</Link></h1>
        <ul className="links-list">
          <li onClick={handleClick}><Link to='/'>Create</Link></li>
          <li><Link to='/routine'>Routine</Link></li>
          <li><Link to='/saved'>Saved</Link></li>
        </ul>
      </nav>
    </div>
  )
}