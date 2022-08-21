import styled from "styled-components";

export const SidebarComponent = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #4d3a6b7f;
  .list {
    height: auto;
    padding: 0;
    width: 100%;
  }
  .li {
    width: 90%;
    height: 60px;
    list-style-type: none;
    display: flex;
    color: white;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 15px;
    transition: 350ms;
    #icon {
      flex: 30%;
      display: grid;
      place-items: center;
    }
    #title {
      flex: 70%;
    }
    &:hover {
      background-color: #2718417e;
    }
  }

  .userInfo {
    padding: 20px;
    .accordion {
      border-radius: 10px;
      background-color: #412f5e;
    }

    #avatar {
      display: grid;
      place-items: center;
    }
    #loggedUserInfo {
      display: flex;
      flex-direction: column;
      place-items: center;
      flex: 75%;
      color: white;
      p {
        margin: 0;
        font-size: 20px;
      }
      .userEmail {
        margin-top: -5px;
        font-size: 12px;
      }
    }

    .logoutButton {
      display: flex;
      justify-content: center;
      padding: 0px 0px 10px 0px;
      button {
        width: 100px;
        height: 30px;
        border-radius: 7px;
        font-size: 13px;
        background-color: #53c484;
        color: white;
        font-weight: bolder;
        border: none;
        cursor: pointer;
      }
    }
  }
  #selected {
    background-color: #2718417e;
  }
`;
