import './App.css';
import { useState } from "react";
import randColor from './Functions/randColor';
import Kv from './Components/JamesBond/kv';


function App() {

    const [kv, setKv] = useState([]);


    return (
      <div className="App">
        <header className="App-header"> 
        <h1 onClick={() => setKv(k => [...k,randColor()])}>State</h1>
        <div className='kv-bin'>
            {
                kv.map((c,i) => <Kv key={i} i={i} c={c}></Kv>)
            }
             </div>


        </header>
      </div>
    );
  }
  
  export default App;
  