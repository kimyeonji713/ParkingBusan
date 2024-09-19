import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#A73121",
  subRed: "#921A40",
  pointGray: "#3C3D37",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box}

    body{
        background-color: #f1f1f1;
        color: black;
        font-family: "Nanum Gothic", sans-serif;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
    
`;
