import React from "react";
import { ButtonContainer, LoginContainer } from "./login-page.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../../src/contexts/auth";
import Register from "../register/register-page.component";
import Button from "../button/button.component";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { email, password } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <LoginContainer>
      <div className="wraper">
        <h1>Bem vindo(a) de volta</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={handleChange}
            />
          </div>
          <ButtonContainer>
            <Button type="submit">Entrar</Button>
          </ButtonContainer>
        </form>
        <Register />
      </div>
    </LoginContainer>
  );
};

export default Login;
