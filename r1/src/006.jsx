import './App.css';
import Fun from './Components/006/Fun';
import { useState } from "react";
import Sad from './Components/006/Sad';
import randColor from './Functions/randColor';
import ReactClassState3 from './Components/006/ReactClassState3';
import ReactClassState21 from './Components/006/ReactClassState21';
import ReactClassState22 from './Components/006/ReactClassState22';


function App() {
    const [count, setCount] = useState(0);
    const [skaitliukas, setCount3] = useState(0);
    const [kv, setKv] = useState([]);
    const [kvadr, setKvadr] = useState([]);
    const [kvadrRed, setKvadrRed] = useState([]);

    return (
      <div className="App">
        <header className="App-header"> 
        <ReactClassState21></ReactClassState21>
        <ReactClassState22></ReactClassState22>
        <h1 onClick={()=> setKv(k=>[...k, randColor()])}>State</h1>
        <Fun spalva ='pink' setCount={setCount} setKvadr={setKvadr}
        setKvadrRed={setKvadrRed} setCount3={setCount3}></Fun>
        <Sad count={count}></Sad>
        <ReactClassState3 skaitliukas={skaitliukas}></ReactClassState3>
        <div className='kv-bin'>
            {
                kv.map((c,i)=> <div className='kv' style={{backgroundColor: c+'69',
            borderColor: c,}} key={i}></div>)
            }
        </div>
        <div className='kv-bin'>
          {
            kvadr.map((c,i)=> <div className='kvadr'  style={{backgroundColor: 'blue'}} key={i}></div>)
          }
        </div>
        <div className='kv-bin'>
          {
            kvadrRed.map((c,i)=> <div className='kvadrRed'  style={{backgroundColor: c}} key={i}></div>)
          }
        </div>





        </header>
      </div>
    );
  }
  
  export default App;
  