import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    function handleStart(){
      setIsRunning(true)
    }
    function handleStop(){
      setIsRunning(false)
    }
    useEffect(() =>{
      let intervalId;
      if(isRunning) {
      intervalId = setInterval(()=>{
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      }
      return () =>{
        clearInterval(intervalId)
      }
    }, [isRunning])
  return (
    <div>
      <h1>Counter Property</h1>
      <p className='count'>{count}</p>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Counter
