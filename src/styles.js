import styled, { createGlobalStyle } from "styled-components";


export const colors = {
    primary: '#a346ff',
    loginItems: "#28083ab8",
};

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
    }
    
    body {
        color: #260334;
        background-color: #f7ddf7;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23c556df' fill-opacity='0.21' fill-rule='evenodd'/%3E%3C/svg%3E");

    }

    body, input {
        font-family: 'Rubik', sans-serif;
    }
`;

export const Image = styled.img `
width: 280px;
height: 230;
border-radius: 75px;
`;

export const Layout = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

export const NavSection = styled.div `
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.button `
  width: 170px;
  height: 150px;
  border-radius: 75px;
  border: solid 1px black;
  background-color: #580d6e;
  color: #f1ecec;
  font-style: italic;
  h4 {
    font-size: larger;
  }
`;

export const NavButton = styled.button `
  background: none;
  border: none;
  font-size: 50px;
`;