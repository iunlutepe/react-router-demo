import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { playersLoader, playerLoader } from "./CommonUtils";

import Home from "./Home";
import Players from "./Players";
import Player from "./Player";
import Teams from "./Teams";

import "./styles.css";
import PlayerError from "./PlayerError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/players",
    element: <Players />,
    loader: playersLoader,
    children: [
      {
        path: "player/:id",
        element: <Player />,
        loader: playerLoader,
        errorElement: <PlayerError/>
      },
    
    ],
  },
  { path: "/teams", 
    element: <Teams/>
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);