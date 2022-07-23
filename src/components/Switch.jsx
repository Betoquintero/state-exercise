import React, { useState } from 'react'

const Switch = () => {
  const [count, setCount]=useState(0)
  const [counterClass, setCounterClass] = useState('light')
  
  const setLightTheme = () => {
    setCount(prev=>prev+1)
    setCounterClass('light')

  }

  const setDarkTheme = () => {
    setCount(prev=>prev+1) 
    setCounterClass('dark')   
  }

  return (
    <div className={'switch ' + counterClass}>
      <h2>Theme picker</h2>
      <h4>Times changed:{count} </h4>
      <button onClick={setLightTheme}>Light theme</button>
      <button onClick={setDarkTheme}>Dark theme</button>  
    </div>
  )
}

export default Switch;

