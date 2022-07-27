import { useContext } from "react";
import PirmasisContekstas from "../../Contexts/PirmasisContestas";

function M2({kas}){

   const  {pirmas, spalva} = useContext(PirmasisContekstas);

    return <h2 style={{color: spalva}}>{kas} {pirmas}</h2>
};

export default M2;