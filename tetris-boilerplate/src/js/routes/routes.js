import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Options from "../views/Options";
import Layout from "../layout/Layout";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Instrucciones from "../views/Instrucciones";
import Chat from "../server/Chat";
import Controls from "../components/Controls";
import SinglePlayer from "../views/SinglePlayer";
import MultiPlayer from "../views/MultiPlayer";
const routes = [
  {
    path: "/",
    element: <Home />
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
    path:"/singlePlayer",
    element: <SinglePlayer/>
  },
  {
    path:"/multiPlayer",
    element: <MultiPlayer/>
  },
  {
    path:"/instrucciones",
    element:<Instrucciones />
  },
  {
    path:"/chat",
    element:<Chat />
  },
  {
    path:"/options/",
    children:[{
        path: "/options/",
        element: <Options />
      },
      {
        path:"/options/controls",
        element:<Controls/>
      }]
  }
]

  const fullRoutes = [{
    path: "/",
    element: <Layout/>,
    children: routes

  }]

  const router = createBrowserRouter(fullRoutes);
  export default router
