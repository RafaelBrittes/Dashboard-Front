import styled from "styled-components";

export const UsersContainer = styled.div`
  width: 80%;
  text-align: center;
  .user {
    display: inline-grid;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 250px;
    background-color: #2718417e;
    justify-content: center;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: -10px 10px 45px #00000069;
    h5 {
      color: white;
      margin: 0px;
      padding: 0px;
      font-size: 13px;
      font-weight: 400;
      text-align: center;
      overflow: hidden;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
  .loading {
    padding: 25px;
    height: 25px;
    width: 200px;
    background-color: #2718417e;
    color: white;
    justify-content: center;
    margin: auto;
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: -10px 10px 45px #00000069;
    font-size: 20px;
  }
`;
