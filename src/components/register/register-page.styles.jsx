import styled from "styled-components";

export const RegisterContainer = styled.div`
  h1 {
    font-size: 23px;
    color: #4b4b4b;
    text-align: center;
  }
  form {
    margin-bottom: 80px;
  }

  input {
    background: none;
    background-color: #e6e6e66e;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    width: 280px;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 500ms;
    border: 2px solid transparent;
    &:focus {
      background-color: #ffffff;
      border: 2px solid #000000;
      transition: 500ms;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
