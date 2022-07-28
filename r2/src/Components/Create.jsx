import { useState } from "react";
import { useContext } from "react";
import AnimalsContexts from "./AnimalsContexts";

function Create() {

    const { animalsTypes, setCreateData } = useContext(AnimalsContexts);
    const [type, setType] = useState(1);
    const [weight, setWeight] =useState('');

    const buttonClick = () =>{
        setCreateData({type, weight: parseFloat(weight)});
        setType(1);
        setWeight('');

    }

    return (
        <div className="card m-4">
            <h5 className="card-header">Add new Animal</h5>
            <div className="card-body">
                <div className="form-group">
                    <label>Our types of animals</label>
                    <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                        {
                            animalsTypes.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>How much is the {animalsTypes.find(a => a.id == type).type} (kg)?</label>
                    <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
                        <small  className="form-text text-muted">Please enter your animal weight in kg.</small>
                </div>
                <button type="button" onClick={buttonClick} className="btn btn-info m-2">Add this creature</button>

            </div>
        </div>
    )

}

export default Create;