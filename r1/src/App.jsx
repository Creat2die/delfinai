import './App.css';
import PirmasisContekstas from './Contexts/PirmasisContestas';
import { KitasContekstas } from './Contexts/PirmasisContestas';
import M1 from './Components/009/M1';
import { useState } from 'react';
import { useRef } from 'react';
import Boxes from './Components/009/Boxes';

function App() {

    const good =useRef();


    let bla = 5;

    const blaSuper = useRef(5);
    const [count, setCount]= useState(0);

    const doCount =() =>{
        const my = good.current;

       setCount(c => c+1);
       bla ++;
       console.log(bla);
       blaSuper.current++;
       console.log(blaSuper.current);
    }

    return (
        <PirmasisContekstas.Provider value={{
            pirmas: 'Valio',
            spalva: 'pink'
        }}>
      <div className="App">
        <header className="App-header"> 
        <h1>
            useContext & useRef {count}
        </h1>
        <M1 kas="Penki"></M1>
        <button ref={good} onClick={doCount}>+1</button>

        <Boxes></Boxes>

        </header>
      </div>
      </PirmasisContekstas.Provider>
    );
  }
  
  export default App;
  