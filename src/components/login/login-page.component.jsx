import React from "react";
import { LoginContainer } from "./login-page.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../../src/contexts/auth";

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
      <h1>Já tem uma conta?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <span></span>

          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Logar</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
