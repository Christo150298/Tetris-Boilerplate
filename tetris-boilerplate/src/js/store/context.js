import React, { createContext, useContext, useState, useEffect } from "react"
import Tetris_Theme from "../utils/tetris_theme.js"

const Context = createContext()

export const ContextProvider = ({children}) => {

    const [musicOn,SetMusicOn] = useState(false)
    const [test,setTest] = useState("Vacio")
    const [registro, setRegistro]=useState([{
        score:0,
        rows:0,
        level: 0,
        time: {
          horas: 0,
           min : 0,
           seg: 0
    }}]);
    const[mejorPuntuacion , setMejorPuntuacion] = useState(result[0])
   

const result = registro.sort((a,b)=>{return b.score - a.score})





    const handleTheme = () => {
        Tetris_Theme.play()
    }

    const store = {
        test,
        registro,
        setRegistro,
        mejorPuntuacion,
        setMejorPuntuacion
    }

    const actions = {
        handleTheme
    }

    return  <Context.Provider value={{store,actions}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;