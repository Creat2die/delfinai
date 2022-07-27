import { useState } from "react";

function Text (){

    const [text, setText] =useState('');
    const [title, setTitle] =useState('TEXT');
    const [color, setColor] =useState('#00aa00');


    const handleImput = e =>{
        console.log(e.target.value);
        setText(e.target.value);
        if(''=== e.target.value){
            setTitle('TEXT')
        }else{
            setTitle(e.target.value);
        }
    } 


    const handleColorInput = e=>{
        setColor(e.target.value);
    }
    
    return(
        <>
        <fieldset>
            <legend style={{color: color}}>{title}</legend>
            <input type="text" value={text} onChange={handleImput} ></input>
            <div>
            <input type="color" value={color}  onChange={handleColorInput}></input>
            </div>

        </fieldset>
        </>
    )
};

export default Text;