import { useState, useEffect } from "react"
import '../CSS/Countdown.css'
import sound from '../assets/beep.mp3'

export default function Countdown({ onBgColor }){
  const [timer, setTimer] = useState(60)

  function play() {
    var audio = new Audio(sound);
    audio.play();
}

  useEffect(() => {
    if(timer === 0) {
      onBgColor()
      play()
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