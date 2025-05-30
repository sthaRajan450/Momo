import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({components}) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  
  useEffect(() => {
    if (!isAuthenticated || isLoading) {
      return navigate("/login");
    }
  }, [isAuthenticated, isLoading]);
  return components;
};

export default ProtectedRoute;
