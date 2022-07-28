import { useContext } from "react";
import AnimalsContexts from "./AnimalsContexts";
import Line from "./Line";

function List(){

    const {animals} = useContext(AnimalsContexts);

    return (
        <div className="card m-4">
            <h5 className="card-header">My Zoo</h5>
            <div className="card-body"></div>
            <ul className="list-group">
                {
                    animals?.map(a => <Line key={a.id} data={a}></Line>)
                }
                 </ul>
        </div>
    )
}


export default List;