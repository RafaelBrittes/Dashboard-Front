import React from "react";

import { ButtonContainer, RegisterContainer } from "./register-page.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Button from "../button/button.component";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password);
  };

  return (
    <RegisterContainer>
      <h1>Ainda não tem uma conta?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="name-input">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="email-input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="password-input">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={handleChange}
          />
        </div>
        <ButtonContainer>
          <Button type="submit">Registrar-se</Button>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default Register;
