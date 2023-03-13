import React from "react";
import { Routes, Route } from "react-router-dom"
import DashBoardPage from "../pages/Home";
import LoginPage from "../pages/Login";
import FavoritePage from "../pages/Favorites";

export default function Router (){
  return (
    <Routes>
      <Route path="/" element={ <LoginPage />} />
      <Route path="/register" element={ <FavoritePage />} />
      <Route path="/dash" element={ <DashBoardPage />} />
    </Routes>
  );
}