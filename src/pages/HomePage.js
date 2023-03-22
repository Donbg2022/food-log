import '../CSS/HomePage.css'

export default function HomePage(){

  return (
    <div className='home-wrapper'>
      <div className="home-cards">
        <div className="card">
          <h1>Create Your Own Routine!</h1>
          <p>Click here to create your own stretching routine today!</p>
        </div>

        <div className="card">
          <h1>View Your Saved Routines!</h1>
          <p>Click here to view your saved routines!</p>
        </div>

        <div className="card">
          <h1>Go To Your Routine!</h1>
          <p>Click here to resume your routine!</p>
        </div>
      </div>
    </div>
  )
}