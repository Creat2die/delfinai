import { useState } from "react";
import randColor from "../../Functions/randColor";
import rand from "../../Functions/rand";


function Fun({spalva,setCount,setCount3, setKvadr, setKvadrRed}){

    const [bg, setBg] = useState('green');
    const [rad, setChange] = useState('0px');
    //5 uzduotis
  
  

    const changeB = () => {
        setBg(b => bg=== 'green' ? 'crimson' : 'green')
        console.log(bg);
    }

    const addOne = () => {
        setCount(c => c+1);
    }

    const change = () => {
        setChange(g => rad === '0px' ? '50%' : '0px')
    }

    const change31 = () =>{
        setCount3(c => c+1);
    }

    const change32 = () =>{
        setCount3(c => c-3);
    }

    //5 uzduotis bandom keist spalvas
    const changeKvadrRed =() =>
    setKvadrRed(k=>[...k, 'red']);

    const changeKvadrBlue =() =>
    setKvadrRed(k=>[...k, 'blue']); 
 
    return (
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg
        }}>Fun</h2>
        <button onClick={changeB}> Do Red</button>
        <button onClick={addOne}>+1</button>
        <div className="kv" style={{
            backgroundColor: 'red',
            borderRadius: rad
        }}></div>
        <button onClick={change}>Change</button>
        <div className="kv" style={{
            backgroundColor: 'red',
            fontSize: '65px',
            borderRadius: rad
        }}>{rand(5,25)}</div>
        <button onClick={change}>change</button>
        <h1>---------------------</h1>
        <button onClick={change31}>Mygtukas +1</button>
        <button onClick={change32}>Mygtukas -3</button>

        <button onClick={()=> setKvadr(k=>[...k, ''])}>add</button>

        <button style={{backgroundColor: 'red', padding: '10px'}} onClick={changeKvadrRed}>Add Red</button>
        <button style={{backgroundColor: 'blue', padding: '10px'}} onClick={changeKvadrBlue}>Add Blue</button>
        <button style={{backgroundColor: 'white', padding: '10px'}} onClick={()=> setKvadrRed(k=>[])}>Restart</button>
        </>
    );
}

export default Fun;