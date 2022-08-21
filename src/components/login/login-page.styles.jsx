import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 90vh;
  background: #fff;
  border-radius: 15px;
  box-shadow: -10px 10px 45px #000000;
  transition: 500ms;
  margin: 5vh;
  @media (max-width: 1200px) {
    width: 50vw;
  }
  @media (max-width: 1000px) {
    width: 60vw;
  }
  @media (max-width: 700px) {
    width: 80vw;
  }
  @media (max-width: 550px) {
    width: 100vw;
    margin: 0vh;
    height: 100vh;
    border-radius: 0px;
  }
  .wraper {
    margin-top: auto;
  }
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
