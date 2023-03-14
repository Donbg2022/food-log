import { Link } from "react-router-dom"
import '../CSS/Nav.css'

export default function Nav(){
  return (
    <div>
      <nav className="nav">
        <h1 className="logo">STRETCHIT!</h1>
        <ul className="links-list">
          <li><Link to='/'>Stretches</Link></li>
          <li><Link to='/routine'>Routine</Link></li>
        </ul>
      </nav>
    </div>
  )
}