import React from "react";
import { useState, useEffect } from "react";


export const useContador =()=>{
    const [ seg, setSeg] = useState(0);
	const [ min , setMin ] = useState(0);
	const [ horas, setHoras ] = useState(0);
    const [onOff, setOnOff] = useState(false)


    let intervalId;
    const counterOne=()=>{
    setSeg((seg) => seg+ 1);
    }

    useEffect(()=>{
        if(onOff== "on"){
            intervalId = setInterval(counterOne, 1000);  
        }
        return () => clearInterval(intervalId);
    },[seg, onOff])
    
   
   
    const start = ()=>{
    setOnOff("on")
    }
    
const stop=()=>{
    setOnOff(false)
}

    const restore = () => {
        setSeg(0);
        setMin(0);
        setHoras(0);
        setOnOff(false)
      };
    


    if(seg == 60){
        setSeg(0)
        const newcounter1 = min + 1
        setMin( newcounter1)
    }	
    if(min == 60 ){
        setMin(0)
        const newcounter2 = horas + 1
        setHoras( newcounter2)
    }
    



    return[
       seg, min, horas, onOff, setOnOff, start, restore, stop
    ]
}
