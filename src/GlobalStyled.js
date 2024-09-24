import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#A73121",
  subRed: "#921A40",
  pointGray: "#3C3D37",
  fontGray_1: "lightgray",
  fontGray_2: "gray",
};

export const size = {
  size_1024: "1024px",
  size_768: "768px",
  size_435: "435px",
  size_368: "368px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box}

    body{
        background-color: lightgray;
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
