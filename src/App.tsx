import { useState, useEffect } from 'react'
import './App.css'
import Square from './components/Square'


interface SquareData{
  color:string,
  text:string
}

function App() {
  const [count, setCount] = useState(0)
  const [squares, setSquares] = useState<Array<SquareData>>([]);
  const [squaresLoaded, setSquaresLoaded] = useState(false);

  useEffect(() => {
    if(!squaresLoaded)
      {
        const tempArray: Array<SquareData> =[];
        tempArray.push({color:"blue", text:"ploob"});
        tempArray.push({color:"green", text:"plab"});
        tempArray.push({color:"#feceba", text:"gaspt"});
        setSquares(tempArray);
        setSquaresLoaded(true);
      }
  }, [squaresLoaded])

function handleAddSquareClick()
{
  const squaresDeepCopy = JSON.parse(JSON.stringify(squares));
  squaresDeepCopy.push({ color: 'red', text:'fleep'
 });

  setSquares(squaresDeepCopy);

  console.log('adding square');
}
function handleClearClick()
{
  setSquares([]);
}
  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {squares.length}
        </button>

        <button onClick={handleAddSquareClick}>Add square</button>
        <button onClick={handleClearClick}>Clear</button>

        <div className='flex-container-div' id='flexDiv'>
        {squares && squares.map((square,key)=>
        <Square key={key} color={square.color} text={square.text}/>
        )}

        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
