import { useState, useEffect } from 'react'
import './App.css'
import Square from './components/Square'
import nautica from './assets/themes/nautica.json';
import beachy from './assets/themes/beachy.json';
import words from './assets/words.json';

interface SquareData{
  color:string,
  text:string
}

function App() {
  const [squares, setSquares] = useState<Array<SquareData>>([]);
  const [squaresLoaded, setSquaresLoaded] = useState(false);
  const [theme, setTheme] = useState<Array<string>>([]);

  useEffect(() => {
    if(!squaresLoaded)
      {
        const tempArray: Array<SquareData> =[];
        tempArray.push({color:"blue", text:"ploob"});
        tempArray.push({color:"green", text:"plab"});
        tempArray.push({color:"#feceba", text:"gaspt"});
        setSquares(tempArray);
        setSquaresLoaded(true);
        setTheme(beachy);
      }
  }, [squaresLoaded])

function handleAddSquareClick()
{
  const squaresDeepCopy = JSON.parse(JSON.stringify(squares));
  let colorIndex=Math.floor(Math.random()*5);
  let wordIndex=Math.floor(Math.random()*5);

  squaresDeepCopy.push({ color: theme[colorIndex], text: words[wordIndex]
 });

  setSquares(squaresDeepCopy);

  console.log(`adding square, color:${theme[colorIndex]} (Index: ${colorIndex})`);
}
function handleClearClick()
{
  setSquares([]);
}
  return (
    <>
      <div>
      <h1>Square Time!</h1>
      <div className="card">
        <button onClick={handleAddSquareClick}>Add square</button>
        <button onClick={handleClearClick}>Clear</button>
        <div className='flex-container-div' id='flexDiv'>
        {squares && squares.map((square,key)=>
        <Square key={key} color={square.color} text={square.text}/>
        )}

        </div>
      </div>
      </div>
    </>
  )
}

export default App
