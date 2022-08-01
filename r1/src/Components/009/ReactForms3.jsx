import { useState } from "react";

function ReactForms3 (){


    const [bignumber, setBignumber] = useState('100');
    const [smallnumber, setSmallnumber]= useState('50');


    let bigNum = (e) =>{
        setBignumber(e.target.value);
        setSmallnumber(e.target.value/ 2);
    };

    let smallNum = (e) =>{
        setSmallnumber(e.target.value);
        setBignumber(e.target.value *2);
    };

    return (
        <>
        <div style={{display: 'flex', gap: '10px', padding:'30px'}}>
            <div>
                <input onChange={bigNum} value={bignumber}></input>
            </div>
            <div>
                <input onChange={smallNum} value={smallnumber}></input>
            </div>
        </div>
        
        </>
    )

};

export default ReactForms3;