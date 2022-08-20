import styled from "styled-components";

export const BaseButton = styled.button`
  width: 140px;

  height: 40px;
  line-height: 30px;
  border-radius: 7px;
  font-size: 15px;
  background-color: #53c484;
  color: white;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: #7ddaa5;
    transition: 300ms;
  }
`;

export const GrayButton = styled(BaseButton)`
  background-color: white;
  border: 2px solid #4b4b4b;
  color: #4b4b4b;
  transition: 300ms;
  &:hover {
    background-color: #4b4b4b;
    color: white;
    transition: 300ms;
  }
`;
