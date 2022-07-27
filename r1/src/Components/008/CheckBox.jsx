import { useEffect } from "react";
import { useState } from "react";



function CheckBox (){
        const [cb, setCb] =useState({A:false, B:true,C:true, W:false});
        
        const [checked, setChecked] = useState(['B', 'C'])
    
    
        const handleImput = e =>{
           setCb(c => ({...c, [e.target.value] : !c[e.target.value]}));
        } 

        useEffect(() => {
            const box =[];
            for(const b in cb){
                if(true === cb[b]){
                    box.push(b)
                }
            }
            setChecked(box);
        }, [cb])
    
        return(
            <>
            <fieldset>


                <legend>{
                    checked.map(b => <b key={b}>{b}</b>)
                }</legend>
                    A <input type="checkbox" value="A" checked={cb.A} onChange={handleImput}></input>
                    B <input type="checkbox" value="B" checked={cb.B} onChange={handleImput}></input>
                    C <input type="checkbox" value="C" checked={cb.C} onChange={handleImput}></input>
                    D <input type="checkbox" value="W" checked={cb.W} onChange={handleImput}></input>
                
            </fieldset>
            </>
        )
    };

export default CheckBox;