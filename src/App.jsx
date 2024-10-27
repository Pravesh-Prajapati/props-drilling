import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'

function App() {
  const userData = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };

  return (
    <>
     <div className="container">
      <div className="level level-1">
        <div className="level-title">Parent Component (Level 1)</div>
        <div>Passing user data down...</div>
        <Child1 userData={userData} />
      </div>
    </div>
    </>
  )
}

export default App
