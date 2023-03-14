import { useState, useEffect } from "react"

export default function Countdown(){
  const [timer, setTimer] = useState(10)

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
    <div>
      <button onClick={handleClick}>play</button>
      {timer}
    </div>
  )
}