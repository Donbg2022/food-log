import '../CSS/HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage(){

  return (
    <div className='home-wrapper'>
      <div className="home-cards">

        <div className="card">
          <Link to='/search'>
            <h1>Create Your Own Routine!</h1>
            <p>Click here to create your own stretching routine today!</p>
          </Link>
        </div>
          
        <div className="card">
          <Link to='/saved'>
            <h1>View Your Saved Routines!</h1>
            <p>Click here to view your saved routines!</p>
          </Link>
        </div>
        
        
        <div className="card">
          <Link to='/routine'>
            <h1>Go To Your Routine!</h1>
            <p>Click here to resume your routine!</p>
          </Link>
        </div>
        
      </div>
    </div>
  )
}