import React from "react";
import Tetris from "../../components/Tetris";
import Estadisticas from "../../components/Estadisticas";
const SinglePlayer =()=>{
return(
<div className="container">
    <Estadisticas/>
<div className=" d-flex justify-content-center">
<Tetris/>

</div>


</div>
);
};
export default SinglePlayer;
