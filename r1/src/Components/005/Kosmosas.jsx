import rand from "../../Functions/rand";

function Kosmosas({spalva, krastas, manoStilius}){

        return (
        <>
        <div style={
            {
                color: spalva,
                fontSize: rand(15,150),
                padding: krastas,
            }
            }> Kos-Mos </div>
        <div style={manoStilius}> Miau</div>
        </>);
}


export default Kosmosas;