import React from 'react';
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@OcuriosoToken:")
  return (
    <>
      {token ? <Outlet/> : <Navigate to='' />}
    </>
  );

}

export default ProtectedRoutes;