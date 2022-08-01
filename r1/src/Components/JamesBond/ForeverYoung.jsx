import { useEffect } from "react";
import { useState } from "react"

function ForeverYoung(){

    const [count, setCount] = useState(null);

    useEffect(() => {
        let howMuch = localStorage.getItem('myLife');
        if (null === howMuch){        
            setCount({yearsPast: 0});
        } else {
            setCount(JSON.parse(howMuch));
        }
    }, []);
    //sinchronizuojam su local storage
    useEffect(() =>{
        if(count === null){
            return;
        }
        localStorage.setItem('myLife', JSON.stringify(count));
    }, [count])

    const add= () =>{
       setCount(c => ({...c, yearsPast: c.yearsPast +1}));
    }   

    return(
        <>
        <h1 style={{
            fontSize: '77px', 
            color: '#777777'
        }}>{count?.yearsPast}</h1>
        <button onClick={add}>add ONE YEAR</button>
        </>
    )
};

export default ForeverYoung
