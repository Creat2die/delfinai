import './App.css';
import { useState } from "react";
import randColor from './Functions/randColor';
import Kv from './Components/JamesBond/kv';
import { useEffect } from 'react';
//import Count from './Components/JamesBond/Count';
import ForeverYoung from './Components/JamesBond/ForeverYoung';


function App() {

    const [kv, setKv] = useState([]);

    const kvPress = () =>{
        setKv(k => [...k,randColor()]);
        console.log('ja ja 1');
    }

    useEffect(()=>{
        if(kv.length !==0){
        console.log('jaja 2');
        }
    }, [kv]);

    return (
      <div className="App">
        <header className="App-header"> 
        <h1 onClick={kvPress}>State</h1>
        <div className='kv-bin'>
            {
                kv.map((c,i) => <Kv key={i} i={i} c={c}></Kv>)
            }
             </div>
        <ForeverYoung></ForeverYoung>

        </header>
      </div>
    );
  }
  
  export default App;
  