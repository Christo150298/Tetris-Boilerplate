import React from "react";

const Contador=({seg , min , horas})=>{


return(<>
<div className="d-flex bg-primary w-25">
    <div >{horas}</div>:
    <div >{min}</div>:
    <div >{seg}</div>
</div>
</>)

}
export default Contador;

