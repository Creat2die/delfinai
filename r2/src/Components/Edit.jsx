import { useContext } from "react";
import AnimalsContexts from "./AnimalsContexts";
import { useState } from "react";
import { useEffect } from "react";


function Edit() {

    const { animalsTypes, setEditData } = useContext(AnimalsContexts);
    const [type, setType] = useState(1);
    const [weight, setWeight] = useState('');
    const { modalData, setModalData } = useContext(AnimalsContexts);

    const buttonClick = () => {
        setEditData({ type, weight: parseFloat(weight), id: modalData.id });
        setModalData(null);

    }

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setWeight(modalData.weight);
        setType(modalData.type);
    }, [modalData])



    if (null === modalData) {
        return null;
    }

    return (
        <>
            <div className="modal"  >
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" onClick={() => setModalData(null)} className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card m-4">

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
                                        <small className="form-text text-muted">Please enter your animal weight in kg.</small>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={buttonClick} className="btn btn-primary">Save changes</button>
                            <button type="button" onClick={() => setModalData(null)} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


export default Edit;