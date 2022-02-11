import styled from "styled-components";

export const Menu = styled.ul`
display: flex;
height: 100%;
list-style: none;
width: 100%;
flex-direction: row;

@media screen and (max-width: 960px) {
  background-color: #2279E6;
  position: absolute;
  top: 50px;
  left: ${({ open }) => (open ? "0" : "-150%")};
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 1s all ease;
  z-index: 1223;
}
`;