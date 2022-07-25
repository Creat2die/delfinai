import { useEffect } from "react";

function Kv({c, i}){

useEffect(()=> {
    console.log('as gyvas', i);
    return () => {
        console.log('mire', i);
    }
}, [])

    return(
        <div className="kv" style={{
            backgroundColor: c +'66',
            borderColor: c
        }}></div>
    )
};


export default Kv;