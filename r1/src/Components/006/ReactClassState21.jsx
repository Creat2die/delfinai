import { useState } from "react";

function ReactClassState21 ({}){


    const [azuolas, setAzuolas] = useState([]);
    const addazuolas =() =>
    setAzuolas(k=>[...k, 'Azuolas']);

    const [berzas, setBerzas] = useState([]);
    const addberzas = () =>
    setBerzas(k => [...k, 'Berzas']);

    const [uosis, setUosis] = useState([]);
    const adduosis = () => 
    setUosis(k => [...k, 'Uosis']);
    
 

    return(
        <>
        <button  onClick={() => {
        setAzuolas (_ => [])
        setBerzas (_ => [])
        setUosis (_ => [])
    }}>Reset</button>
    
        <div style={{display: 'flex', paddingTop: '50px', gap: '150px'}}>
        <button  onClick={addazuolas}>Ąžuolas</button>
        <button  onClick={addberzas}>Beržas</button>
        <button  onClick={adduosis}>Uosis</button>
        </div>

        <div style={{display: 'flex', gap: '5px'}}>
            <div style={{width: '300px', height: '500px', backgroundColor: 'green', display: 'flex', flexWrap: 'wrap', gap: '3px'}}>
               { azuolas.map((a,i) => <div style={{height: '40px', width: '40px', backgroundColor: 'brown'}}> <p style={{fontSize: '10px'}}>{a}</p></div>)}
            </div>
            <div style={{width: '300px', height: '500px', backgroundColor: 'green', display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
               { berzas.map((a,i) => <div style={{height: '40px', width: '40px', backgroundColor: 'brown'}}> <p style={{fontSize: '10px'}}>{a}</p></div>)}
            </div>
            <div style={{width: '300px', height: '500px', backgroundColor: 'green', display: 'flex', flexWrap: 'wrap', gap: '3px'}}>
               { uosis.map((a,i) => <div style={{height: '40px', width: '40px', backgroundColor: 'brown'}}> <p style={{fontSize: '10px'}}>{a}</p></div>)}
            </div>
        </div>
        </>
    );
};

export default ReactClassState21;