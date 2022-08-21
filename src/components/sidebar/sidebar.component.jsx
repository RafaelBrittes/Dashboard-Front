import React, { useContext } from "react";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { SidebarComponent } from "./sidebar.styles";
import { AuthContext } from "../../contexts/auth";
import Avatar from "@mui/material/Avatar";
import GroupIcon from '@mui/icons-material/Group';
import { deepOrange } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  const SidebarData = [
    {
      title: "Informações",
      link: "/info",
      icon: <InsightsIcon />,
    },
    {
      title: "Mostrar Usuários",
      link: "/users",
      icon: <PersonAddIcon />,
    },    {
      title: "Carregar Usuários",
      link: "/import",
      icon: <GroupIcon />,
    },
  ];

  return (
    <SidebarComponent>
      <div className="userInfo">
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar id="avatar" sx={{ bgcolor: deepOrange[500] }}>
              {user.name.charAt(0)}
            </Avatar>
            <div id="loggedUserInfo">
              <div className="userName">
                <p>Olá {user.name}</p>
              </div>
              <div className="userEmail">{user.email}</div>
            </div>
          </AccordionSummary>
          <AccordionDetails className="logoutButton">
            <button onClick={handleLogout}>Deslogar</button>
          </AccordionDetails>
        </Accordion>
      </div>
      <ul className="list">
        {SidebarData.map((value, key) => {
          return (
            <li
              className="li"
              id={window.location.pathname == value.link ? "selected" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </SidebarComponent>
  );
};

export default Sidebar;
