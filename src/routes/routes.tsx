import React from "react";
import { Routes, Route } from "react-router-dom"
import DashBoardPage from "../pages/DashBoardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

//TODO: Protected routes, AutoLogin.
export default function Router (){
  return (
    <Routes>
      <Route path="/" element={ <LoginPage />} />
      <Route path="/register" element={ <RegisterPage />} />
      <Route path="/dash" element={ <DashBoardPage />} />
    </Routes>
  );
}