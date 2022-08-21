import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Sidebar from "./sidebar.component";

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div style={{ display: "flex" }}>
        {user && <Sidebar />}
        {children}
      </div>
    </>
  );
};

export default Layout;
