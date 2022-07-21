import { useState } from "react";
import randColor from "../../Functions/randColor";
import rand from "../../Functions/rand";


function Fun({spalva,setCount,setCount3}){

    const [bg, setBg] = useState('green');
    const [rad, setChange] = useState('0px');

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
        </>
    );
}

export default Fun;