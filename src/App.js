import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
  let mainRoutes = useRoutes(routes);

  return (
    <div>
      <TopBar></TopBar>
      <div className="app-container">
        <SideBar></SideBar>
        {mainRoutes}
      </div>
    </div>
  );
}
