import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-500 text-shadow-black p-4 rounded-3xl'>Vite + React+ Tailwind + github</h1>
      

      <Card  username = "chai aur code" btnText = "click me"/>
      <Card username = "aasma" btnText = "click me"/>







    
  


      
     
    </>
  )
}

export default App
