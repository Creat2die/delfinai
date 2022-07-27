import { useEffect } from "react";
import { useState } from "react";


function ReactClassState23(){

    const [count, setCount]= useState(null);

    useEffect (() =>{
        let kiekis = localStorage.getItem('skaiciai');
        if (null === kiekis){
            setCount({yearsPast: 0})
        } else {
            setCount(JSON.parse(kiekis));
        }
    }, []);

    useEffect(() => {
        if(count === null){
            return;
        }else{
            localStorage.setItem('skaiciai', JSON.stringify(count));
        }
    }, [count])


    const add= () =>
    setCount(c => ({...c, yearsPast: c.yearsPast + 1}));

    return (
        <>
            <h1>
            {count?.yearsPast} 
            </h1>
            <button onClick={add}>+</button>
        </>
    )
};


export default ReactClassState23;