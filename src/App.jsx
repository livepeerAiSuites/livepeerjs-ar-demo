import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './background'
import Faceless from './faceless'
function App() {
  const [count, setCount] = useState(0)


  return (
     <div className='w-full  '>
      {/* <Background /> */}
      <Faceless />
       
     </div>
  )
}

export default App
