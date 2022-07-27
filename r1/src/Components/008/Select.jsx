import { useState } from "react";

const options = [
    {value:1, text: 'One'},
    {value:2, text: 'Two'},
    {value:5, text: 'Five'},
    {value:1000000, text: 'One Million'},
]

function Select (){
        const [select, setSelect] =useState(1000000);
        const [selected, setSelected] =useState(100000);
    
    
        const handleImput = e =>{
            setSelect(e.target.value);
        } 
    

        
        return(
            <>
            <fieldset>
                <legend>Select : {selected}</legend>
                <select value={select} onChange={handleImput}>
                    {
                        options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                    }

                </select>
                <div>
                    <button onClick={() => setSelected(options.find(o => select == o.value).text)}>Button</button>
                   {// <input type="datetime-local"></input> 
                   } 
                </div>
                
            </fieldset>
            </>
        )
    };

export default Select;