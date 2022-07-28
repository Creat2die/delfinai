import { useContext } from "react";
import AnimalsContexts from "./AnimalsContexts";

function Edit() {

    const {modalData, setModalData} = useContext(AnimalsContexts);

    if(null === modalData){
        return null;
    }

    return (
        <>
            <div className="modal"  >
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" onClick={()=> setModalData(null)} className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" onClick={()=> setModalData(null)} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


export default Edit;