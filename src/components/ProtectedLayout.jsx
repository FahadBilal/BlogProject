import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedLayout() {
  const user = null;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedLayout;
