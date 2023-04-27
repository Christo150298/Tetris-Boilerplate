import React from "react";
import useAppContext from "../store/context";
import { Link } from "react-router-dom";
const Home = () => {
    
    const {store,actions} = useAppContext()

    return(
        <>
        <button onClick={actions.handleTheme}>Escucha Nuestro Tema</button>
       <Link to="/singlePlayer">Single Player</Link>
       <Link to="/multiPlayer">Multi Player</Link>
    </>);

};

export default Home;