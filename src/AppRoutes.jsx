import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Login from "./components/login/login-page.component";
import Layout from "./components/sidebar/layout.component";
import UsersInfo from "./components/usersInfo/usersInfo.component";
import ImportUsers from "./components/importUsers/importUsers.component";
import Users from "./components/users/users.component";

const AppRoutes = () => {

  // const Private = ({ children }) => {
  //   const { user, loading } = useContext(AuthContext);
  //   if (loading) return <div>Carregando</div>;
  //   console.log(user)
  //   if (!user) {
  //     return <Navigate to={"/login"} />;
  //   }
  //   return children;
  // };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>

        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/info" element={<UsersInfo/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/import" element={<ImportUsers/>}/>

          <Route path="/*" element={<UsersInfo/>}/>
          
        </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;