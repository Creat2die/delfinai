import { useEffect } from "react";
import { useState } from "react";

function ReactForms2() {

    const [name, setName] = useState('');
    const [weight, setWeight] =useState('');
    let sum = 0;
    

    const [data, setData] = useState([]);

    const catName = (e) =>{
        setName(e.target.value)
        console.log(e.target.value);
    };

    const catWeight = (e) =>{
        setWeight(e.target.value)
        console.log(e.target.value);
    };

    useEffect (() => {
        if (localStorage.getItem('dataKey')){
            let data = JSON.parse(localStorage.getItem('dataKey'));
            setData(data);
        }
    },[])

    useEffect (() => {
       data.length >0 && localStorage.setItem('dataKey', JSON.stringify(data)); 
    }, [data]);

    const addData = () =>{
        setData(c => [...c, {catname:name, catweight:weight}])
    }

    let sumarr = data.map(c => c.catweight);
    for (let i=0; i< sumarr.length; i++){
        sum += Number(sumarr[i]);
    };


    return (
        <>
            <p>React Forms 2 užduotis</p>
            <div style={{width: '40%', display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <p>Įveskite katinuko vardą</p>
                    <input onChange={catName}></input>
                </div>
                <div style={{width: '50%'}}>
                  <p>Įveskite katinuko svorį</p>
                    <input onChange={catWeight}></input>
                </div>
            </div>
            <button style={{margin: '20px', padding: '10px'}} onClick={addData} >Save</button>
            <p>ALl cat weiht: {sum}</p>
            <p>{data.map((c,i) => <li key={i}>{`Katinuko vardas: ${c.catname} 
            Svoris: ${c.catweight}`}</li>)}</p>
            

        </>
    )
};

export default ReactForms2;