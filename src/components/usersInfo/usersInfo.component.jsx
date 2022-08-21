import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";

const UsersInfo = () => {
  const [userInfos, setUserInfos] = useState([{}]);
  useEffect(() => {
    api.get("/client/infos").then((res) => {
      setUserInfos(res.data);
    });
  }, []);
  console.log(Object.keys(userInfos) );

  return (
    <div>
      <div>
        Usuários sem ultimo nome: {userInfos.without_last_name}
      </div>
      <div>
        Usuários sem gênero: {userInfos.without_gender}
      </div>
      <div>
        Usuários com e-mail válido: {userInfos.valid_emails}
      </div>
      <div>
        Usuários com e-mail inválido: {userInfos.invalid_emails}
      </div>
    </div>
  );
};

export default UsersInfo;
