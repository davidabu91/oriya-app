import styled, { createGlobalStyle, keyframes } from "styled-components";


export const colors = {
    primary: '#a346ff',
    loginItems: "#28083ab8",
};

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
    }
    
    body {
        color: #120118;
        background-color: #ffffaa;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23c556df' fill-opacity='0.21' fill-rule='evenodd'/%3E%3C/svg%3E");
        

    }

    body, input {
        font-family: 'Rubik', sans-serif;

    }
`;

export const Image = styled.img `
width: 280px;
height: 150px;
border-radius: 50px;
`;


export const PersonImage = styled.img `
width: 280px;
height: 150px;
border-radius: 50px;
`;

export const Layout = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;

  h2 {
      font-size: 30px;
      margin-top: 5px;
      margin-bottom: 5px;
  }

  p {
    font-weight: bolder;
    justify-content: center;
  }

`;

export const NavSection = styled.div `
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.button `
  width: 170px;
  height: auto;
  border-radius: 25px;
  border: none;
  color: #18031f;
  opacity: 0.8;
  background-color: #fff;
  font-style: italic;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  :active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}

  h4 {
    font-size: larger;
    opacity: 0.9;
  }
`;

export const AttributtTitle = styled.button `
  width: 130px;
  height: 70px;
  border-radius: 15px;
  border: solid 1.5px black;
  color: #18031f;
  opacity: 0.8;
  background-color: #fff;
  font-style: italic;
  border-radius: 10px;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  :active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }

  h4 {
    font-size: larger;
  }
`;


export const NavButton = styled.button `
  background: none;
  border: none;
  font-size: 50px;
  :active {
    transform: translate(0, 0.3rem);
}
`;

const animation = keyframes `
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  /* 100% { opacity: 0; transform: translateY(-100px); } */
`;
export const Wrapper = styled.span `
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  display: flex;
  flex-direction: column;
`;

export const ContainerRelative = styled.div `
  position: relative;
  
  h3 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-weight: bolder;
    font-size: 20px;
    color: white;
  }

  button {
    border: none;
    background: none;
  }
`;