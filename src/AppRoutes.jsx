import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth";
import Dashboard from "./components/dashboard/dashboard.component";
import Login from "./components/login/login-page.component";
import { useContext } from "react";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Carregando</div>;

    if (!user) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
