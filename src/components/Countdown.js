import { useState, useEffect } from "react"
import '../CSS/Countdown.css'

export default function Countdown({ onBgColor }){
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    if(timer === 0) {
      onBgColor()
    }
  }, [timer])

    const handleClick = () => {
      const interval = setInterval(() => {
        setTimer(countdown => {
          if (countdown === 0) {
            clearInterval(interval);
            
            return 0;
          } else {
            return countdown - 1;
          }
        });
      }, 1000);
    }
 

  return ( 
     <div className="timer-wrapper">
      <button className='timer' onClick={handleClick}>start</button>
      <div className="count">{timer}</div>
    </div>
  )
}