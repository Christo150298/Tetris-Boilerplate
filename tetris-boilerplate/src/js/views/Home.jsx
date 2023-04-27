import React from "react";
import useAppContext from "../store/context";
import { Link } from "react-router-dom";
const Home = () => {
    
    const {store,actions} = useAppContext()

    return(
        <>
        <button onClick={actions.handleTheme}>Escucha Nuestro Tema</button>
       <div className="container">
        <div className="  d-flex justify-content-center p-5 ">
        <button className="m-3">
        <Link to="/singlePlayer" className="stylesButonPlayer ">Single Player</Link>
        </button>
        <button className="m-3">
       <Link to="/multiPlayer" className="stylesButonPlayer">Multi Player</Link>
       </button>
        </div>
       

       </div>
      
    </>);

};

export default Home;