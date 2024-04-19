import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'

function App() {
  const [count, setCount] = useState(0)

function addSquare()
{
  var d = document.getElementById('flexDiv');
  //d?.setAttribute('class','flex-container-div');

  var s = document.createElement('Square');
  s.setAttribute('color','red');
  s.setAttribute('text','square Text');

  d?.appendChild(s);
  console.log('adding square 2');
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={addSquare}>Add square</button>
        <div className='flex-container-div' id='flexDiv'>
        <Square color="blue" text="peen"/>
        <Square color="green" text="ploob"/>
        <Square color="#feceba" text="wangus"/>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
