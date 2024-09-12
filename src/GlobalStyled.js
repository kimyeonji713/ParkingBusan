import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box}

    body{
        background-color: #f1f1f1;
        color: black;
        font-family: "Nanum Gothic", sans-serif;
    }
`;
