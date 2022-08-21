import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { UsersInfoContainer } from "./usersInfo.styles";

const UsersInfo = () => {
  const [userInfos, setUserInfos] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/client/infos").then((res) => {
      setUserInfos(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <UsersInfoContainer>
      {loading && <div className="loading">Carregando...</div>}

      {!loading && (
        <table className="usersInfo">
          <thead>
            <tr>
              <th>Usuários sem ultimo nome</th>
              <th>Usuários sem gênero</th>
              <th>Usuários com e-mail válido</th>
              <th>Usuários com e-mail inválido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userInfos.without_last_name}</td>
              <td>{userInfos.without_gender}</td>
              <td>{userInfos.valid_emails}</td>
              <td>{userInfos.invalid_emails}</td>
            </tr>
          </tbody>
        </table>
      )}
    </UsersInfoContainer>
  );
};

export default UsersInfo;
