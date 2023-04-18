import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Options from "../views/Options";
import Layout from "../layout/Layout";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Instrucciones from "../views/Instrucciones";
import Controls from "../components/Controls";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/options",
    element:<Options />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/registro",
    element:<Registro />
  },
  {
    path:"/instrucciones",
    element:<Instrucciones />
  },
  {
    path:"/controles",
    element:<Controls/>
  }
]

  const fullRoutes = [{
    path: "/",
    element: <Layout/>,
    children: routes

  }]

  const router = createBrowserRouter(fullRoutes);
  export default router