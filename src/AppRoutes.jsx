import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth";
import Login from "./components/login/login-page.component";
import { useContext } from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import Layout from "./components/sidebar/layout.component";
import UsersInfo from "./components/usersInfo/usersInfo.component";
import ImportUsers from "./components/importUsers/importUsers.component";

const AppRoutes = () => {

  const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Carregando</div>;
    console.log(user)
    if (!user) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>

        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/info" element={<UsersInfo/>}/>
          <Route exact path="/users" element={<UsersInfo/>}/>
          <Route exact path="/import" element={<ImportUsers/>}/>

          <Route path="/*" element={<UsersInfo/>}/>
          
        </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;