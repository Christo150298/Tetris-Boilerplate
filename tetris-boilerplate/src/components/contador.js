import React from "react";

const Contador=({seg , min , horas})=>{


return(<>
<div className=" d-flex justify-content-center mx-5  mt-2 bg-primary w-25 rounded-pill">
    <div >{horas}</div>:
    <div >{min}</div>:
    <div >{seg}</div>
</div>
</>)

}
export default Contador;

