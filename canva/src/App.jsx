import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="wrapper">
      
    <img src="/images/ham.svg" alt=" " />
    <img src="/images/logo.svg" alt="" />
  
  <div id="list">
    <div className="list-1">
      <select name='dropdown' id='drop'>
        <option value=" ">Design Spotlight</option>
        <option value=" ">item</option>

      </select>

      <select name='dropdown' id='drop'>
        <option value=" ">Business</option>
        <option value=" ">item</option>

      </select>

      <select name='dropdown' id='drop'>
        <option value=" ">Education</option>
        <option value=" ">item</option>

      </select>
      <img src="/images/dots.svg" alt="image not found" />

    </div>

    <div className="list-2">

    </div>


    <div className="search">
      <img src="/images/zoom.svg" alt="" />
    <input type="text" placeholder='Use 5+ words to describe' />
    </div>


    <div className="list-2">
    <img src="/images/monitor.svg" alt="image not found" />
    <img src="/images/settings.svg" alt="" />
    <img src="/images/bell.svg" alt="" />
    </div>

    <div className="button">
      <button>Create a design</button>
      
    </div>
   <div className="logo">
    <button>R</button>
  </div>
   
  </div>
  {/* <div className="logo">
    <button>R</button>
  </div> */}

</div>
    </>
)}

export default App
