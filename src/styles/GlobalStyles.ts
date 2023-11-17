import { createGlobalStyle } from "styled-components";
import { theme } from "../theme/style";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    #root {
        background: ${theme.colors.bgContainer};
    }
`;
