import { useContext } from "react";
import AnimalsContexts from "./AnimalsContexts";

function Line({data}){

    const {animalsTypes} =useContext(AnimalsContexts);

    return(
        <>
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <span className="line__content__title">
                        {animalsTypes.find(a => a.id == data.type).type}
                    </span>
                    <span className="line__content__w">
                        {data.weight} KG
                    </span>
                </div>
                <div className="line__buttons">
                <button type="button"  className="btn btn-info m-2">Edit</button>
                <button type="button"  className="btn btn-info m-2">Delete</button>

                    </div>
            </div>
        </li>
        </>
    )
};

export default Line;