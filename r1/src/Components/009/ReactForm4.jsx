function ReactForm4 (){

    const Red =0;

    return(
        <>

        <div style={{display: 'flex', gap: '30px'}}>
            <p>Pick a color</p>
            <p>Pick a size</p>
            <p>Pick a font</p>
        </div>
        <div style={{display: 'flex',gap: '30px', width: '60%', paddingBottom: '20px'}}>
        <select id="color" style={{width: '33%'}}>
            <option value={Red}>Red</option>
            <option value={Red}>Violet</option>
            <option value={Red}>Blue</option>
            <option value={Red}>Green</option>
            <option value={Red}>White</option>
        </select>
        
        <select id="size" style={{width: '33%'}}>
            <option value={Red}>5px</option>
            <option value={Red}>10px</option>
            <option value={Red}>15px</option>
            <option value={Red}>20px</option>
            <option value={Red}>25px</option>
        </select>
        <select id="font" style={{width: '33%'}}>
            <option value={Red}>Times new Roman</option>
            <option value={Red}>Roboto</option>
            <option value={Red}>Roboto</option>
            <option value={Red}>Roboto</option>
            <option value={Red}>Roboto</option>
        </select>
        </div>
        <div style={{display: 'flex', gap: '30px', paddingBottom: '100px'}}>
        <p>Please input text</p>
        <input onChange={text}></input>
        </div>

        </>
    )

};

export default ReactForm4;