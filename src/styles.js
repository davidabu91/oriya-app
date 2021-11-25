import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: '#a346ff',
    loginItems: "#28083ab8",
};

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
    }
    
    body {
        background: #ead5ff;
        color: #260334
    }

    body, input {
        font-family: 'Roboto', sans-serif;
    }
`;