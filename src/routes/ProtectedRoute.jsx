import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../context/UserContext";

export const ProtectedRoute = ({ adminOnly = false }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.rol !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};