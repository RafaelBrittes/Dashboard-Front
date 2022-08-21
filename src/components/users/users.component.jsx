import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UsersContainer } from "./users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageInfos, setpageInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/client").then((res) => {
      setUsers(res.data.data);
      setpageInfos(res.data);
      setLoading(false);
    });
  }, []);

  const firstPage = () => {
    setLoading(true);
    const pageUrl = pageInfos.first_page_url.split("/").pop();
    api.get(pageUrl).then((res) => {
      setUsers(res.data.data);
      setpageInfos(res.data);
      setLoading(false);
    });
  };
  const nextPage = () => {
    setLoading(true);

    const pageUrl = pageInfos.next_page_url.split("/").pop();
    api.get(pageUrl).then((res) => {
      setUsers(res.data.data);
      setpageInfos(res.data);
      setLoading(false);
    });
  };
  console.log(pageInfos);

  return (
    <UsersContainer>
      {loading && <div className="loading">Carregando...</div>}
      {!loading &&
        users.map((user) => {
          return (
            <div className="user" key={user.id}>
              <h5>ID: {user.id}</h5>
              <h5>Nome: {user.first_name}</h5>
              <h5>Ultimo nome: {user.last_name}</h5>
              <h5>E-mail: {user.email}</h5>
              <h5>Gênero: {user.gender}</h5>
              <h5>IP: {user.ip_address}</h5>
              <h5>Empresa: {user.company}</h5>
              <h5>Cidade: {user.city}</h5>
              <h5>Titulo: {user.title}</h5>
              <h5>
                Website: <a href={user.website}> {user.website}</a>
              </h5>
            </div>
          );
        })}
      {!loading && (
        <div className="pagination">
          <Button buttonType={BUTTON_TYPE_CLASSES.gray} onClick={firstPage}>First</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.gray} onClick={nextPage}>Next</Button>
        </div>
      )}
    </UsersContainer>
  );
};

export default Users;
