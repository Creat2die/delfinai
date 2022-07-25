import { useState } from "react";


function ReactClassState22Inter (){


    const [skaiciuoti, setSkaiciuoti] = useState(0);
    const addskaicius = () =>{
        setSkaiciuoti(c => c+1);
    }

    return(
        <>
        <button style={{margin: '15px'}} onClick={addskaicius} >+</button>
        <div>{skaiciuoti}</div>     
        </>
    )
};


export default ReactClassState22Inter;