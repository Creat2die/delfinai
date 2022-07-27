import { useEffect } from "react";
import { useState } from "react";

function Radio (){
        
        const [radio, setRadio]=useState('');

        const handleImput = e=>{
            setRadio(e.target.value)
        }

        return(
            <>
            <fieldset className="radio">
                <legend>Radio: <b>{radio}</b></legend>
                <label htmlFor="_a">A</label> <input id="_a" type="radio" name="b" value="A" onChange={handleImput} checked={radio ==='A'}></input>
                <label htmlFor="_b">B</label> <input id="_b" type="radio" name="b" value="B" onChange={handleImput} checked={radio ==='B'}></input>
                <label htmlFor="_c">C</label> <input id="_c" type="radio" name="b" value="C" onChange={handleImput} checked={radio ==='C'}></input>

                
            </fieldset>
            </>
        )
    };

export default Radio;