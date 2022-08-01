import { useState } from "react";
import rand from "../../Functions/rand";


function Boxes(){


    const [number, setNumber]=useState('');
    const [kvadr, setKvadr]= useState([]);

    const generuoti = () =>{
        for(let i=0; i<number; i++){
        setKvadr(a =>[...a, rand(0,1)]);
        }
    };
   

    const kiekis = (e) => {
            setNumber (e.target.value);
            console.log(e.target.value);
    }

    return (
        <>
        <p>Įveskite kiek kvadratų nupiešti</p>
        <input onChange={kiekis}></input>
        <button onClick={generuoti}>Sukurk</button>
        
        <div style={{width: '80%', display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap'}}>
          {
            kvadr.map((c,i)=><div style={{backgroundColor: 'red', height: '50px', width: '50px', padding: '10px', color: 'white'}} key={i}>
               {c}
            </div>)
          }
        </div>
        </>
    )
};

export default Boxes;