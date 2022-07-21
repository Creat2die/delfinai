import './App.css';
import Fun from './Components/006/Fun';
import { useState } from "react";
import Sad from './Components/006/Sad';
import randColor from './Functions/randColor';
import ReactClassState3 from './Components/006/ReactClassState3';


function App() {
    const [count, setCount] = useState(0);
    const [skaitliukas, setCount3] = useState(0);
    const [kv, setKv] = useState([])

    return (
      <div className="App">
        <header className="App-header"> 
        <h1 onClick={()=> setKv(k=>[...k, randColor()])}>State</h1>
        <Fun spalva ='pink' setCount={setCount}  setCount3={setCount3}></Fun>
        <Sad count={count}></Sad>
        <div className='kv-bin'>
            {
                kv.map((c,i)=> <div className='kv' style={{backgroundColor: c+'69',
            borderColor: c,}} key={i}></div>)
            }
        </div>
        <ReactClassState3 skaitliukas={skaitliukas}></ReactClassState3>

        </header>
      </div>
    );
  }
  
  export default App;
  