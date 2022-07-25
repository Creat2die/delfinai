import { useState } from "react";
import ReactClassState22Inter from "./ReactClassState22Inter";

function ReactClassState22 (){

    const [juodas, setJuodas] = useState([]);
    const addJuodas = () =>
    setJuodas(a => [...a, '']);

    return (
        <>
        <button onClick={addJuodas}>Pridėti</button>
        <div style={{display: 'flex', gap:'10px', flexWrap:'wrap', margin: '15px', backgroundColor: 'black', height: '100px', height: '100px'}}>{
            juodas.map((_,i) => <ReactClassState22Inter  key={i}></ReactClassState22Inter> )
        }</div>
        </>
    )
};

export default ReactClassState22;