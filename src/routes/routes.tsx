import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "../pages/Home";
import LoginPage from "../pages/Login";
import FavoritePage from "../pages/Favorites";
import ProtectedRoutes from "../pages/Protected";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route index element={<DashBoardPage />} />
      </Route>
      <Route path="/favorites" element={<FavoritePage />} />
    </Routes>

  );
}
