import React from "react";
import useAppContext from "../js/store/context";
const Estadisticas=()=>{
const {store, action}= useAppContext()
const {registro, setRegistro, mejorPuntuacion,
    setMejorPuntuacion}=store


return(<>
<p>ESTADISTICAS</p>
<p>{registro.length > 1 ? (registro.map((item, index)=>{
    
    return(
    <div >
       Level: {item.level}
       Rows:{item.rows}
       Score: {item.score}
       Time : {item.time.horas} : {item.time.min} : {item.time.seg}
       
    </div>)
    }))
    :
    ("")}
    
    
    </p>

</>)

}
export default Estadisticas;